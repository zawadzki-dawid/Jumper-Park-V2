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
import { ReactComponent as TreeLeft } from './tree-left.svg'
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

    @media only screen and (max-width: 1250px) {
      margin-left: auto;

      > svg {
        height: 350px;
        width: auto;
        rotate: 180deg;
        transform-origin: center;
      }
    }
  
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

      @media only screen and (max-width: 1250px) {
        top: 50%;
        left: 20px;
        max-width: 250px;
        transform: translateY(-50%);

        > svg {
          height: 50px;
          width: auto;
        }

        > p {
          font-size: 2.0rem;
        }
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

  > svg {
    @media only screen and (max-width: 1250px) {
      height: 300px;
      width: auto;
    }
  }
  
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

    @media only screen and (max-width: 1250px) {
      left: 24px;
      top: 50%;
      transform: translateY(-50%);

      > svg {
        height: 50px;
        width: auto;
      }

      > p {
        font-size: 2rem;
        max-width: 210px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    transform: translateY(0px);
    margin-right: auto;
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

  > .third-ball-ball {
    @media only screen and (max-width: 1250px) {
      height: 400px;
      width: auto;
    }
  }
  
  > .third-ball-star {
    left: 0;
    top: 10px;
    display: none;
    position: absolute;

    @media only screen and (max-width: 750px) {
      display: block;
    }
  }
  
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

    @media only screen and (max-width: 1250px) {
      left: 50px;
      top: 50%;
      transform: translateY(-50%);

      > svg {
        height: 50px;
        width: auto;
      }

      > p {
        font-size: 2rem;
        max-width: 150px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    transform: translateY(0px);
    margin-left: auto;
  }
`

const ThirdBall = () => {
    return <ThirdBallStyled>
        <ThirdBallImage className={'third-ball-ball'}/>
        <div>
            <Three/>
            <p>Sala na wyłączność</p>
        </div>
        <Star className={'third-ball-star'}/>
    </ThirdBallStyled>
}

const FourthBallStyled = styled.div`
  position: relative;

  > svg {
    @media only screen and (max-width: 1250px) {
      height: 350px;
      width: auto;
    }
  }
  
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

    @media only screen and (max-width: 1250px) {
      left: 50px;
      top: 50%;
      transform: translateY(-50%);

      > svg {
        height: 50px;
        width: auto;
      }

      > p {
        font-size: 2rem;
        max-width: 200px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    margin-right: auto;
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

  > svg {
    @media only screen and (max-width: 1250px) {
      height: 300px;
      width: auto;
    }
  }
  
  > .star {
    top: 64px;
    right: 72px;
    height: 97px;
    width: auto;
    position: absolute;

    @media only screen and (max-width: 1250px) {
      top: 0;
    }
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

    @media only screen and (max-width: 1250px) {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);

      > svg {
        height: 50px;
        width: auto;
      }

      > p {
        font-size: 2rem;
        max-width: 200px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    padding-top: 0;
    margin-left: auto;
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

  @media only screen and (max-width: 750px) {
    padding-bottom: 60px;
  }
  
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

    @media only screen and (max-width: 1100px) {
      display: none;
    }
  }

  > .christmas-header-start-right {
    height: 195px;
    width: auto;
    top: 512px;
    right: 0;
    position: absolute;

    @media only screen and (max-width: 1100px) {
      display: none;
    }
  }
  
  > .christmas-header-tree-right {
    top: 245px;
    position: absolute;
  }

  > .christmas-header-semicircle {
    right: 0;
    top: 43px;
    position: absolute;

    @media only screen and (max-width: 1100px) {
      display: none;
    }
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

    @media only screen and (max-width: 750px) {
      font-size: 4.8rem;
      max-width: 400px;
      padding-top: 164px;
    }
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

    @media only screen and (max-width: 750px) {
      font-size: 6rem;
      padding-bottom: 164px;
    }
  }
  
  > .christmas-header-description {
    margin-left: auto;
    max-width: 900px;
    margin-right: auto;
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.80);
    border-bottom: 1px solid rgba(255, 255, 255, 0.80);

    @media only screen and (max-width: 900px) {
      margin-left: 16px;
      margin-right: 16px;
    }
    
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

      @media only screen and (max-width: 750px) {
        font-size: 2.4rem;
        padding-top: 32px;
        padding-bottom: 32px;
        
      }
      
      > span {
        color: #F4B860;
      }
    }
  }
  
  > .christmas-header-prices-wrapper {
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 32px;
    display: flex;
    
    > .christmas-header-days {
      width: 50%;
      
      > div {
        gap: 40px;
        color: #fff;
        display: flex;
        font-size: 2.4rem;
        padding-top: 20px;
        padding-bottom: 56px;
        flex-direction: column;
        align-items: center;
        padding-right: 78px;
        width: fit-content;
        margin-left: auto;
      }
    }

    > .christmas-header-prices {
      width: 50%;
      border-left: 1px solid rgba(255, 255, 255, 0.80);

      > div {
        gap: 40px;
        color: #fff;
        display: flex;
        font-size: 2.4rem;
        padding-left: 170px;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 56px;
        width: fit-content;
      }
    }

    @media only screen and (max-width: 750px) {

      > .christmas-header-days {
        > div {
          gap: 20px;
          font-size: 1.6rem;
          padding-right: 24px;
          padding-bottom: 24px;
          max-width: 130px;
        }
      }

      > .christmas-header-prices {
        > div {
          gap: 48px;
          margin: auto;
          font-size: 1.6rem;
          padding-left: 24px;
          padding-bottom: 24px;
        }
      }
    }
  }
  
  > .christmas-header-legend {
    margin-left: 16px;
    margin-right: 16px;
    color: #F4B860;
    text-align: center;
    font-size: 1.8rem;
    padding-top: 72px;

    @media only screen and (max-width: 750px) {
      font-size: 1.4rem;
    }
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

    @media only screen and (max-width: 750px) {
      display: none;
    }
  }
  
  > h2 {
    color: #fff;
    font-weight: 400;
    font-size: 4.8rem;
    max-width: 505px;
    margin: auto;
    text-align: center;
    font-family: 'Abril Fatface', serif;

    @media only screen and (max-width: 750px) {
      font-size: 3.2rem;
      max-width: 340px;
    }
    
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

    @media only screen and (max-width: 900px) {
      margin-left: 16px;
      margin-right: 16px;
    }
    
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

      @media only screen and (max-width: 750px) {
        font-size: 2.4rem;
        padding-top: 32px;
        padding-bottom: 32px;
      }
      
      > span {
        color: #F4B860;
      }
    }
  }

  > .christmas-process-prices-wrapper {
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 32px;
    display: flex;

    > .christmas-process-things {
      width: 50%;

      > div {
        gap: 40px;
        color: #fff;
        display: flex;
        font-size: 2.4rem;
        padding-top: 20px;
        padding-bottom: 56px;
        flex-direction: column;
        align-items: center;
        padding-right: 78px;
        width: fit-content;
        margin-left: auto;
      }
    }

    > .christmas-process-prices {
      width: 50%;
      border-left: 1px solid rgba(255, 255, 255, 0.80);

      > div {
        gap: 40px;
        color: #fff;
        display: flex;
        font-size: 2.4rem;
        padding-left: 170px;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 56px;
        width: fit-content;
      }
    }

    @media only screen and (max-width: 750px) {

      > .christmas-process-things {
        > div {
          gap: 20px;
          font-size: 1.6rem;
          padding-right: 24px;
          padding-bottom: 24px;
          max-width: 130px;
          align-items: start;
        }
      }

      > .christmas-process-prices {
        > div {
          gap: 24px;
          margin: auto;
          font-size: 1.6rem;
          padding-left: 24px;
          padding-bottom: 24px;
        }
      }
    }
  }

  > .christmas-process-legend {
    margin-left: 16px;
    margin-right: 16px;
    text-align: center;
    color: #F4B860;
    font-size: 1.8rem;
    padding-top: 72px;

    @media only screen and (max-width: 750px) {
      font-size: 1.4rem;
    }
  }
  
  > .christmas-process-first-line {
    display: flex;
    padding-top: 56px;
    justify-content: space-between;

    @media only screen and (max-width: 1250px) {
      gap: 32px;
      flex-direction: column;
    }
  }
  
  > .christmas-process-second-line {
    display: flex;
    padding-left: 11%;
    padding-bottom: 40px;
    padding-right: 16.5%;
    justify-content: space-between;

    @media only screen and (max-width: 1250px) {
      gap: 32px;
      padding-left: 0;
      padding-right: 0;
      flex-direction: column;
    }
  }
`

const ContactSection = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #15342B;

  @media only screen and (max-width: 750px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  > .christmas-contact-info {
    margin: auto;
    padding-top: 40px;
    width: fit-content;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    position: relative;
    
    > a {
      gap: 32px;
      display: grid;
      color: #F4B860;
      font-size: 2.4rem;
      width: fit-content;
      align-items: center;
      grid-auto-flow: column;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
      
      & > svg:last-child {
        rotate: 180deg;
        transform-origin: center;
      }

      @media only screen and (max-width: 750px) {
        font-size: 1.8rem;
        
        > svg {
          display: none;  
        }
      }
    }
  }
  
  > h2 {
    color: #fff;
    font-weight: 400;
    font-size: 4.8rem;
    width: fit-content;
    margin: auto;
    position: relative;
    font-family: 'Abril Fatface', serif;

    @media only screen and (max-width: 750px) {
      font-size: 3.2rem;
      max-width: 340px;
      text-align: center;
    }
    
    > span {
      color: #F4B860;
    }
  }
  
  > p {
    position: relative;
    color: #F4B860;
  }
  
  > .christmas-contact-start-top {
    top: 93px;
    height: 131px;
    width: auto;
    position: absolute;

    @media only screen and (max-width: 750px) {
      top: -54px;
      height: 110px;
    }
  }
  
  > .christmas-button-wrapper {
    margin: auto;
    width: fit-content;
    position: relative;
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
  
  > .christmas-contact-tree-right {
    right: 0;
    bottom: 98px;
    position: absolute;

    @media only screen and (max-width: 750px) {
      height: 300px;
      width: auto;
      bottom: 180px;
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

    return <div style={{ overflowX: 'clip' }}>
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
            <span>2023<span>/2024</span></span>
            <div className={'christmas-header-description'}>
                <p>
                    Zorganizuj imprezę choinkową dla swojej <span>klasy, szkoły, firmy!</span>
                </p>
            </div>
            <div className={'christmas-header-prices-wrapper'}>
                <div className={'christmas-header-days'}>
                    <div>
                        <span>Poniedziałek - Czwartek</span>
                        <span>Piątek - Niedziela</span>
                    </div>
                </div>
                <div className={'christmas-header-prices'}>
                    <div>
                        <span>67 zł / os</span>
                        <span>74 zł / os</span>
                    </div>
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
                    <div>
                    <span>Poczęstunek</span>
                    <span>Skarpetki antypoślizgowe</span>
                    </div>
                </div>
                <div className={'christmas-process-prices'}>
                    <div>
                    <span>20zł /os</span>
                    <span>7 zł / os</span>
                    </div>
                </div>
            </div>
            <p className={'christmas-process-legend'}>
                *Prezenty należy zorganizować we własnym zakresie
            </p>
        </ProcessSection>
        <ContactSection>
            <TreeLeft className={'christmas-contact-tree-right'}/>
            <Star className={'christmas-contact-start-top'}/>
            <h2>Zapraszamy do <span>kontaktu!</span></h2>
            <div className={'christmas-contact-info'}>
                <a href={'tel:+48576183518'}><Line/>+48 576 183 518<Line/></a>
                <a href={'mailto:jumperpark@wp.pl'}><Line/>jumperpark@wp.pl<Line/></a>
            </div>
            <div className={'christmas-button-wrapper'}>
                <Button to={'/kontakt'} text={'Skontaktuj się z nami'}/>
            </div>
        </ContactSection>
    </div>
}