import styled from "styled-components";
import {useContext, useEffect} from "react";
import {LoaderContext} from "../../components/loader/Loader";
import { ReactComponent as One } from './one.svg'
import { ReactComponent as Two } from './two.svg'
import { ReactComponent as Three } from './three.svg'
import { ReactComponent as Four } from './four.svg'
import { ReactComponent as Five } from './five.svg'
import { ReactComponent as Ball } from './ball.svg'
import { ReactComponent as Line } from './line.svg'
import { ReactComponent as TreeRight } from './tree-right.svg'
import { ReactComponent as Semicircle } from './semicircle.svg'

const Header = styled.section`
  padding-bottom: 120px;
  background-color: #15342B;
  position: relative;
  
  > .christmas-header-tree-right {
    top: 245px;
    position: absolute;
  }

  > .christmas-header-semicircle {
    right: 0;
    top: 43px;
    position: absolute;
  }
  
  > h1 {
    color: #fff;
    font-weight: 400;
    font-size: 7.4rem;
    padding-top: 216px;
    max-width: 666px;
    margin: auto;
    text-align: center;
    position: relative;
    font-family: 'Abril Fatface', serif;
  }
  
  > span {
    color: #fff;
    display: block;
    font-size: 10rem;
    font-weight: 400;
    padding-bottom: 216px;
    margin: auto;
    width: fit-content;
    position: relative;
    font-family: 'Abril Fatface', serif;
    
    > span {
      color: #F4B860;
    }
  }
  
  > .christmas-header-description {
    margin: auto;
    max-width: 900px;
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.80);
    border-bottom: 1px solid rgba(255, 255, 255, 0.80);

    > p {
      color: #fff;
      margin: auto;
      font-size: 4rem;
      font-weight: 400;
      padding-top: 56px;
      width: fit-content;
      padding-bottom: 56px;
      max-width: 662px;
      text-align: center;
      font-family: 'Abril Fatface', serif;

      > span {
        color: #F4B860;
      }
    }
  }
  
  > .christmas-header-prices-wrapper {
    margin: auto;
    display: flex;
    padding-top: 32px;
    width: fit-content;
    
    > .christmas-header-days {
      gap: 40px;
      color: #fff;
      display: flex;
      font-size: 2.4rem;
      padding-top: 20px;
      padding-bottom: 56px;
      flex-direction: column;
      align-items: center;
      padding-right: 78px;
    }

    > .christmas-header-prices {
      gap: 40px;
      color: #fff;
      display: flex;
      font-size: 2.4rem;
      padding-left: 170px;
      flex-direction: column;
      padding-top: 20px;
      padding-bottom: 56px;
      border-left: 1px solid rgba(255, 255, 255, 0.80);
    }
  }
  
  > .christmas-header-legend {
    margin: auto;
    color: #F4B860;
    width: fit-content;
    font-size: 1.8rem;
    padding-top: 72px;
  }
`

const ProcessSection = styled.section`
  padding-top: 64px;
  padding-bottom: 72px;
  background-color: #6B0F1F;
  
  > h2 {
    color: #fff;
    font-weight: 400;
    font-size: 4.8rem;
    font-family: 'Abril Fatface', serif;
    
    > span {
      color: #F4B860;
    }
  }
  
  > p {
    color: #F4B860;
  }
`

const ContactSection = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #15342B;

  > div {
    margin: auto;
    padding-top: 40px;
    width: fit-content;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    
    > a {
      gap: 32px;
      display: grid;
      color: #F4B860;
      font-size: 2.4rem;
      width: fit-content;
      align-items: center;
      grid-auto-flow: column;
      
      & > svg:last-child {
        rotate: 180deg;
        transform-origin: center;
      }
    }
  }
  
  > h2 {
    color: #fff;
    font-weight: 400;
    padding-top: 64px;
    font-size: 4.8rem;
    padding-bottom: 56px;
    font-family: 'Abril Fatface', serif;

    > span {
      color: #F4B860;
    }
  }
  
  > p {
    color: #F4B860;
  }
`

export default () => {
    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (entered) {
            setEntered(false)
        }
    }, [entered])

    return <div>
        <Header>
            <div className={'christmas-header-tree-right'}>
                <TreeRight/>
            </div>
            <div className={'christmas-header-semicircle'}>
                <Semicircle/>
            </div>
            <h1>
                Skoczna Choinka w Jumper Park
            </h1>
            <span>20<span>23</span></span>
            <div className={'christmas-header-description'}>
                <p>
                    Zorganizuj imprezę choinkową dla swojej <span>klasy, szkoły, firmy!</span>
                </p>
            </div>
            <div className={'christmas-header-prices-wrapper'}>
                <div className={'christmas-header-days'}>
                    <span>Poniedziałek - Czwartek</span>
                    <span>Piątek - Niedziela</span>
                </div>
                <div className={'christmas-header-prices'}>
                    <span>62 zł / os</span>
                    <span>67 zł / os</span>
                </div>
            </div>
            <p className={'christmas-header-legend'}>
                *Minimalna liczba osób, aby zarezerwować Choinkę wynosi 10 osób
            </p>
        </Header>
        <ProcessSection>
            <h2>Jak wygląda Choinka w Jumper Park</h2>
            <div>
                <One/>

            </div>
            <div>
                <Two/>
            </div>
            <div>
                <Three/>
            </div>
            <div>
                <Four/>
            </div>
            <div>
                <Five/>
            </div>
            <p>*Prezenty należy zorganizować we własnym zakresie</p>
        </ProcessSection>
        <ContactSection>
            <h2>Zapraszamy do <span>kontaktu!</span></h2>
            <div>
                <a><Line/>+48 576 183 518<Line/></a>
                <a><Line/>jumperpark@wp.pl<Line/></a>
            </div>
        </ContactSection>
    </div>
}