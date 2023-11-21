import styled from "styled-components";
import {useContext, useEffect} from "react";
import {Button} from "../../components/link/Link";
import {LoaderContext} from "../../components/loader/Loader";
import { ReactComponent as One } from './one.svg'
import { ReactComponent as Two } from './two.svg'
import { ReactComponent as Three } from './three.svg'
import { ReactComponent as Four } from './four.svg'
import { ReactComponent as Five } from './five.svg'
import { ReactComponent as Star } from './star.svg'
import { ReactComponent as FirstBallImage } from './ball-first.svg'
import { ReactComponent as SecondBallImage } from './ball-second.svg'
import { ReactComponent as ThirdBallImage } from './ball-third.svg'
import { ReactComponent as FourthBallImage } from './ball-fourth.svg'
import { ReactComponent as FifthBallImage } from './ball-fifth.svg'
import { ReactComponent as Line } from './line.svg'
import { ReactComponent as TreeRight } from './tree-right.svg'
import { ReactComponent as Semicircle } from './semicircle.svg'

const FirstBallStyled = styled.div`
  position: relative;
  
    > div {
      left: 40px;
      top: 142px;
      gap: 16px;
      width: 384px;
      display: flex;
      position: absolute;
      align-items: center;
      
      > p {
        width: 100%;
        color: #fff;
        font-weight: 400;
        font-size: 3.2rem;
        max-width: 327px;
        letter-spacing: 0.02rem;
        font-family: 'Abril Fatface', serif;
      }
    }
`

const FirstBall = () => {
    return <FirstBallStyled>
        <FirstBallImage/>
        <div>
            <One/>
            <p>Dwie godziny zabawy z animatorem</p>
        </div>
    </FirstBallStyled>
}

const SecondBallStyled = styled.div`
  transform: translateY(60px);
  position: relative;

  > div {
    top: 108px;
    gap: 16px;
    display: flex;
    position: absolute;
    align-items: center;

    > p {
      color: #fff;
      font-weight: 400;
      font-size: 3.2rem;
      max-width: 327px;
      letter-spacing: 0.02rem;
      font-family: 'Abril Fatface', serif;
    }
  }
`

const SecondBall = () => {
    return <SecondBallStyled>
        <SecondBallImage/>
        <div>
            <Two/>
            <p>Świąteczne konkursy z nagrodami</p>
        </div>
    </SecondBallStyled>
}

const ThirdBallStyled = styled.div`
  transform: translateY(72px);
  position: relative;

  > div {
    left: -52px;
    top: 158px;
    gap: 16px;
    display: flex;
    position: absolute;
    align-items: center;

    > p {
      color: #fff;
      font-weight: 400;
      font-size: 3.2rem;
      max-width: 226px;
      letter-spacing: 0.02rem;
      font-family: 'Abril Fatface', serif;
    }
  }
`

const ThirdBall = () => {
    return <ThirdBallStyled>
        <ThirdBallImage/>
        <div>
            <Three/>
            <p>Sala na wyłączność</p>
        </div>
    </ThirdBallStyled>
}

const FourthBallStyled = styled.div`
  position: relative;

  > div {
    left: 87px;
    top: 126px;
    gap: 16px;
    width: 384px;
    display: flex;
    position: absolute;
    align-items: center;

    > p {
      width: 100%;
      color: #fff;
      font-weight: 400;
      font-size: 3.2rem;
      max-width: 327px;
      letter-spacing: 0.02rem;
      font-family: 'Abril Fatface', serif;
    }
  }
`

const FourthBall = () => {
    return <FourthBallStyled>
        <FourthBallImage/>
        <div>
            <Four/>
            <p>Pamiątkowe zdjęcie ze Św. Mikołajem</p>
        </div>
    </FourthBallStyled>
}

const FifthBallStyled = styled.div`
    padding-top: 80px;
  position: relative;

  > .star {
    top: 64px;
    right: 72px;
    height: 97px;
    width: auto;
    position: absolute;
  }
  
  > div {
    left: -102px;
    top: 189px;
    gap: 16px;
    display: flex;
    position: absolute;
    align-items: center;

    > p {
      color: #fff;
      font-weight: 400;
      font-size: 3.2rem;
      max-width: 327px;
      letter-spacing: 0.02rem;
      font-family: 'Abril Fatface', serif;
    }
  }
`

const FifthBall = () => {
    return <FifthBallStyled>
        <FifthBallImage/>
        <Star className={'star'}/>
        <div>
            <Five/>
            <p>Rozdanie prezentów przez Św. Mikołaja</p>
        </div>
    </FifthBallStyled>
}


const Header = styled.section`
  padding-bottom: 120px;
  background-color: #15342B;
  position: relative;
  
  > .christmas-header-start-top {
    left: 20%;
    height: 98px;
    width: auto;
    position: absolute;
  }

  > .christmas-header-start-left {
    height: 195px;
    width: auto;
    rotate: 180deg;
    top: 152px;
    position: absolute;
  }

  > .christmas-header-start-right {
    height: 195px;
    width: auto;
    top: 512px;
    right: 0;
    position: absolute;
  }
  
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
    line-height: 115%;
    font-weight: 400;
    font-size: 7.4rem;
    padding-top: 216px;
    max-width: 666px;
    margin: auto;
    letter-spacing: 0.0925rem;
    text-align: center;
    position: relative;
    font-family: 'Abril Fatface', serif;
  }
  
  > span {
    line-height: 120%;
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
  position: relative;
  padding-top: 64px;
  padding-bottom: 72px;
  background-color: #6B0F1F;
  
  > .christmas-process-start-top {
    top: 93px;
    left: 6.5%;
    height: 131px;
    width: auto;
    position: absolute;
  }
  
  > h2 {
    color: #fff;
    font-weight: 400;
    font-size: 4.8rem;
    max-width: 505px;
    margin: auto;
    text-align: center;
    font-family: 'Abril Fatface', serif;
    
    > span {
      color: #F4B860;
    }
  }

  > .christmas-process-description {
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

  > .christmas-process-prices-wrapper {
    margin: auto;
    display: flex;
    padding-top: 32px;
    width: fit-content;

    > .christmas-process-things {
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

    > .christmas-process-prices {
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

  > .christmas-process-legend {
    margin: auto;
    color: #F4B860;
    width: fit-content;
    font-size: 1.8rem;
    padding-top: 72px;
  }
  
  > .christmas-process-first-line {
    display: flex;
    padding-top: 56px;
    justify-content: space-between;
  }
  
  > .christmas-process-second-line {
    display: flex;
    padding-left: 160px;
    padding-bottom: 40px;
    padding-right: 238px;
    justify-content: space-between;
  }
`

const ContactSection = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #15342B;

  > .christmas-contact-info {
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
    font-size: 4.8rem;
    width: fit-content;
    margin: auto;
    font-family: 'Abril Fatface', serif;

    > span {
      color: #F4B860;
    }
  }
  
  > p {
    color: #F4B860;
  }
  
  > .christmas-contact-start-top {
    top: 93px;
    height: 131px;
    width: auto;
    position: absolute;
  }
  
  > .christmas-button-wrapper {
    margin: auto;
    width: fit-content;
    > a {
      font-weight: 500;
      font-size: 1.8rem;
      padding: 16px 32px;
      
      &:hover, &:active {
        color: #F4B860;
        border-color: #F4B860;
      }
    }
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
            <Star className={'christmas-header-start-top'}/>
            <Star className={'christmas-header-start-left'}/>
            <Star className={'christmas-header-start-right'}/>
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
            <Star className={'christmas-process-start-top'}/>
            <h2>Jak wygląda Choinka w Jumper Park</h2>
            <div className={'christmas-process-first-line'}>
                <FirstBall/>
                <SecondBall/>
                <ThirdBall/>
            </div>
            <div className={'christmas-process-second-line'}>
                <FourthBall/>
                <FifthBall/>
            </div>
            <div className={'christmas-process-description'}>
                <p>
                    Dodatki
                </p>
            </div>
            <div className={'christmas-process-prices-wrapper'}>
                <div className={'christmas-process-things'}>
                    <span>Poczęstunek</span>
                    <span>Skarpetki antypoślizgowe</span>
                </div>
                <div className={'christmas-process-prices'}>
                    <span>16zł /os</span>
                    <span>7 zł / os</span>
                </div>
            </div>
            <p className={'christmas-process-legend'}>
                *Prezenty należy zorganizować we własnym zakresie
            </p>
        </ProcessSection>
        <ContactSection>
            <Star className={'christmas-contact-start-top'}/>
            <h2>Zapraszamy do <span>kontaktu!</span></h2>
            <div className={'christmas-contact-info'}>
                <a><Line/>+48 576 183 518<Line/></a>
                <a><Line/>jumperpark@wp.pl<Line/></a>
            </div>
            <div className={'christmas-button-wrapper'}>
                <Button to={'/kontakt'} text={'Skontaktuj się z nami'}/>
            </div>
        </ContactSection>
    </div>
}