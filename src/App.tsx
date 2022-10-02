import styled from 'styled-components'
import { Type } from './components/link/Link'
import { useRef, lazy, useLayoutEffect, useMemo } from 'react'
import { setScrollbarWidth } from './utils/functions/scrollbarWidth'

// Components
import Footer from './components/footer/Footer'
import Loader from './components/loader/Loader'
import RouterMain, { ViewRoute } from './components/router-main/RouterMain'
import Navbar, { MenuLink } from './components/navbar/Navbar'

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
// const SummerClasses = lazy(() => import('./views/summer-classes/SummerClasses'))

type IsNotInNavbar = ViewRoute & {
  isInNavbar: false
}

type IsInNavbar = ViewRoute & MenuLink & {
  isInNavbar: true
}
 

type RouteConfig = Array<IsInNavbar | IsNotInNavbar>

const routes: RouteConfig = [
  /* {
    View: SummerClasses,
    path: '/wakacje',
    text: `Półkolonie`,
    type: Type.Link,
    isInNavbar: true
  }, */
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
    text: 'Grupy zorganizowane',
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

export default () => {
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
  

  return (
    <Loader>
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
