import { lazy } from 'react'
import styled from 'styled-components'
import { Type } from './components/link/Link'

// Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import RouterMain from './components/router-main/RouterMain'

// Views
const Safety = lazy(() => import('./views/safety/Safety'))
const Booking = lazy(() => import('./views/booking/Booking'))
const Classes = lazy(() => import('./views/classes/Classes'))
const Contact = lazy(() => import('./views/contact/Contact'))
const Birthday = lazy(() => import('./views/birthday/Birthday'))
const PriceList = lazy(() => import('./views/price-list/PriceList'))
const SchoolTrip = lazy(() => import('./views/school-trip/SchoolTrip'))
const SummerClasses = lazy(() => import('./views/summer-classes/SummerClasses'))

const routes = [
  {
    View: Birthday,
    path: '/urodziny',
    text: 'Urodziny',
    type: Type.Link
  },
  {
    View: Classes,
    path: '/zajecia',
    text: 'Zajęcia',
    type: Type.Link
  },
  {
    View: Contact,
    path: '/kontakt',
    text: 'Kontakt',
    type: Type.Link
  },
  {
    View: PriceList,
    path: '/cennik',
    text: 'Cennik',
    type: Type.Link
  },
  {
    View: Safety,
    path: '/bezpieczenstwo',
    text: 'Bezpieczeństwo',
    type: Type.Link
  },
  {
    View: SchoolTrip,
    path: '/wycieczkaszkolna',
    text: 'Wycieczka szkolna',
    type: Type.Link
  },
  {
    View: SummerClasses,
    path: '/zajeciawakacyjne',
    text: 'Zajęcia wakacyjne',
    type: Type.Link
  },
  {
    View: Booking,
    path: '/kupbilet',
    text: 'Kup bilet',
    type: Type.Button
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

   >footer {
    flex: 0 1 80px;
  }
`

export default () => {
  return (
    <Wrapper>
      <Navbar
        links={routes}
      />
      <main>
        <RouterMain
          routes={routes}
        />
      </main>
      <Footer/>
    </Wrapper>
  )
}
