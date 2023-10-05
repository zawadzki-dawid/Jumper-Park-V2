import Modal from 'react-modal';
import styled from 'styled-components'
import Icon from './components/icon/Icon';
import { Type } from './components/link/Link'
import {useRef, lazy, useLayoutEffect, useMemo, useState, useEffect} from 'react'
import { setScrollbarWidth } from './utils/functions/scrollbarWidth'

// Components
import Footer from './components/footer/Footer'
import Loader from './components/loader/Loader'
import RouterMain, { ViewRoute } from './components/router-main/RouterMain'
import Navbar, { MenuLink } from './components/navbar/Navbar'
import {useFetchContent} from "./utils/hooks/fetchDoc";

// Views
const Safety = lazy(() => import('./views/safety/Safety'))
const Booking = lazy(() => import('./views/booking/Booking'))
const Classes = lazy(() => import('./views/classes/Classes'))
const Contact = lazy(() => import('./views/contact/Contact'))
const Birthday = lazy(() => import('./views/birthday/Birthday'))
const PriceList = lazy(() => import('./views/price-list/PriceList'))
const SchoolTrip = lazy(() => import('./views/school-trip/SchoolTrip'))
const Attraction = lazy(() => import('./views/attractions/Attraction'))
const Attractions = lazy(() => import('./views/attractions/Attractions'))
const JumpingSchool = lazy(() => import('./views/jumping-school/JumpingSchool'))
const SummerClasses = lazy(() => import('./views/summer-classes/SummerClasses'))

type IsNotInNavbar = ViewRoute & {
  isInNavbar: false
}

type IsInNavbar = ViewRoute & MenuLink & {
  isInNavbar: true
}
 

type RouteConfig = Array<IsInNavbar | IsNotInNavbar>

interface State {
  popUp: string
  popUpVisible: boolean
}

const routes: RouteConfig = [
  // {
  //   View: SummerClasses,
  //   path: '/wakacje',
  //   text: `Półkolonie`,
  //   type: Type.Link,
  //   isInNavbar: true
  // },
  {
    View: Attractions,
    exact: true,
    path: '/atrakcje',
    text: 'Atrakcje',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Attraction,
    path: '/atrakcje/:name',
    isInNavbar: false
  },
  {
    View: SchoolTrip,
    path: '/grupyzorganizowane',
    text: 'Grupy',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: JumpingSchool,
    path: '/skocznaszkola',
    text: 'Skoczna szkoła',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Birthday,
    path: '/urodziny',
    text: 'Urodziny',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Classes,
    path: '/zajecia',
    text: 'Zajęcia',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Safety,
    path: '/bezpieczenstwo',
    text: 'Bezpieczeństwo',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: PriceList,
    path: '/cennik',
    text: 'Cennik',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Contact,
    path: '/kontakt',
    text: 'Kontakt',
    type: Type.Link,
    isInNavbar: true
  },
  {
    View: Booking,
    path: '/kupbilet',
    text: 'Kup bilet',
    type: Type.Button,
    isInNavbar: true
  }
]

const Close = styled.button`
  display: block;
  padding: 10px;
  margin-left: auto;
  height: fit-content;
  
  &>img {
    width: 16px;
    height: 16px;
  }
`

const ModalContent = styled.div`
  padding: 20px;
  
  &>p:not(:first-child) {
    margin-top: 16px;
  }
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  flex-direction: column;

  > header {
    flex: 0 1 var(--nav-mobile-height);
  }

  > main {
    flex: 1 1 auto;
  }

   > footer {
    flex: 0 1 80px;
  }
`

const ModalHeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  padding: 0 10px 0 20px;
  align-items: center;
  justify-content: space-between;
  background: var(--gradient-main);
  
  > h3 {
    font-size: var(--heading-font-size);
  }
`

Modal.setAppElement('#root')

export default () => {
  // State
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Data
  const { data, error } = useFetchContent<State>({ entryId: 'RAGhyGn3RbUG7knpo7Nh' })

  // Effect
  useEffect(() => {
    setIsModalOpen(true)
  }, [data])

  // Ref
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // Effect
  useLayoutEffect(() => {
    setScrollbarWidth()
    const observer = new ResizeObserver(resizeCb)
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }
    return () => observer.disconnect()
  }, [wrapperRef.current])

  // Method
  function resizeCb (entries: ResizeObserverEntry[]) {
    entries.forEach(() => {
      setScrollbarWidth()
    })
  }

  const navbarItems: IsInNavbar[] = useMemo(() => {
    return routes.filter((item): item is IsInNavbar => item.isInNavbar)
  }, [routes])


    const closeModal = () => {
      setIsModalOpen(false)
    }
  

  return (
    <Loader>
      { data && !error && data.popUpVisible &&
          <Modal
          isOpen={isModalOpen}
          shouldCloseOnEsc={true}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(0, 0, 0, 0.1)',
            },
            content: {
              width: '80%',
              inset: '0',
                padding: 0,
              maxWidth: '576px',
              zIndex: 2000,
              position: 'static',
              height: 'fit-content',
              maxHeight: '80vh',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }
          }}>
              <ModalHeaderWrapper>
                  <h3>Aktualności</h3>
                  <Close type={'button'} onClick={() => { setIsModalOpen(false) }}><Icon image={'close'}/></Close>
              </ModalHeaderWrapper>
        <ModalContent dangerouslySetInnerHTML={{ __html: data.popUp }}/>
      </Modal> }
      <Wrapper
        ref={wrapperRef}
      >
        <Navbar
          links={navbarItems}
        />
        <main>
          <RouterMain
            routes={routes}
            />
        </main>
        <Footer/>
      </Wrapper>
    </Loader>
  )
}
