import styled from 'styled-components'
import { useRef, useState, useEffect, SetStateAction, Dispatch } from 'react'

// Components
import Mail from '../../../components/mail/Mail'
import Phone from '../../../components/phone/Phone'
import Image from '../../../components/image/Image'
import Section from '../../../components/section/Section'
import Icon, { Props as PropsIcon } from '../../../components/icon/Icon'

// Assets
import HeroImage from '../../../assets/images/summer/hero.jpg'

// Header

interface PropsHeroStyled {
    wrapperHeight: number
}

const HeroStyled = styled.div<PropsHeroStyled>`
    position: relative;
    height: ${ props => props.wrapperHeight }px;

    .image > img {
        left: 90%;

        @media only screen and (min-width: 500px) {
            left: 50%;
        }

        @media only screen and (min-width: 1400px) {
            top: 450px;
        }
    }

    h2 {
        font-weight: 600;
        font-size: 3.5rem;
        color: var(--white);
        margin-bottom: 64px;
        text-transform: uppercase;
    }

    .overlay {
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: #00000099 0% 0% no-repeat padding-box;
    }

    p {
        max-width: 765px;
        font-weight: 600;
        font-size: 2.0rem;
        color: var(--white);
        letter-spacing: 0.2px;
    }

    section {
        position: relative;
    }

    .content {
        z-index: 1000;
        position: absolute;
        padding: 160px 0 180px;
    }
`

interface PropsHero {
    setLoaded: Dispatch<SetStateAction<boolean>>
}

const Hero = ({
    setLoaded
}: PropsHero) => {
    // State
    const [height, setHeight] = useState<number>(0)

    // Ref
    const contentRef = useRef<HTMLDivElement | null>(null)

    // Method
    const setWrapperHeight = () => {
        if (!contentRef.current) {
            return
        }
        const { height } = contentRef.current.getBoundingClientRect()
        setHeight(height)
    }

    const onLoaded = () => setLoaded(true)

    // Effect
    useEffect(() => {
        setWrapperHeight()
        const observer = new ResizeObserver(setWrapperHeight)
        if (contentRef.current) observer.observe(contentRef.current)
        return () => observer.disconnect()
    })

    return (
        <HeroStyled
            wrapperHeight={height}
        >
            <Section>
                <div 
                    ref={contentRef}
                    className={'content'}
                >
                    <h2>
                        P????kolonie z jumperem!
                    </h2>
                    <p>
                        Chcesz zapewni?? swojemu dziecku niezapomniane prze??ycia wakacyjne?
                        Ekipa Jumpera do??o??y wszelkich stara??, by w??a??nie tak si?? sta??o!
                        Stawiamy na aktywno???? fizyczn??, dobr?? zabaw??, wyj??tkowe warsztaty, aktywny wypoczynek! A to wszystko za jedyne 690 z??! Zach??camy do zapoznania si?? z nasz?? ofert??.
                    </p>
                </div>
            </Section>
            <Image
                src={HeroImage}
                onLoad={onLoaded}
                alt={'Trampoliny'}
            />
            <div 
                className={'overlay'}
            />
        </HeroStyled>
    )
}

// Description

const DescriptionStyled = styled.div`
    padding: 100px 0;

    h3 {
        font-weight: 600;
        font-size: 2.6rem;
        margin-bottom: 40px;
        text-transform: uppercase
    }

    p {
        max-width: 950px;
        font-weight: 600;
        font-size: 1.8rem;
        letter-spacing: 0.18px;
    }
`

const Description = () => {
    return (
        <DescriptionStyled>
            <Section>
                <>
                    <h3>
                        Znajd?? turnus idealny dla siebie
                    </h3>
                    <p>
                        Ka??dy turnus ma inny temat przewodni,
                        jednak wszystkie ????czy jedno =
                        ciekawe zaj??cia i warsztaty w po????czeniu z dobr?? zabaw??
                        na terenie atrakcji Jumper Parku Trampolin (ul. Wiadukt 8, Bia??ystok) pod czujnym okiem trener??w i animator??w!
                    </p>
                </>
            </Section>
        </DescriptionStyled>
    )
}

// Contact

interface PropsMethod {
    image: PropsIcon['image'],
    children: React.ReactElement
}

const ContactMethodStyled = styled.div`
    display: flex;
    column-gap: 30px;
    align-items: center;

    a {
        font-weight: 600;
        font-size: 2.0rem;
        letter-spacing: 0.2px;
        text-decoration: none;
    }

    .icon__wrapper {
        width: 58px;
        height: 58px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-color: #EBE9E9;

        > img {
            width: 29px;
        }
    }
`

const ContactMethod = ({
    image,
    children
}: PropsMethod) => {
    return (
        <ContactMethodStyled>
            <div
                className={'icon__wrapper'}
            >
                <Icon
                   image={image} 
                />
            </div>
            <div>
            { 
                children
            }
            </div>
        </ContactMethodStyled>
    )
}

const ContactStyled = styled.div`
    padding: 50px 0;

    p {
        font-weight: 600;
        font-size: 2.6rem;
        margin-bottom: 40px;
    }

    .methods__wrapper {
        row-gap: 30px;
        display: grid;
    }

    background: transparent linear-gradient(0deg, #F9C41F 0%, #F9A91A 100%) 0% 0% no-repeat padding-box;
`

const Contact = () => {
    return (
        <ContactStyled>
            <Section>
                <>
                    <p>
                        Zarezerwuj miejsce na turnusie
                        <br/>
                        Skontaktuj si?? z nami telefonicznie lub przez e-mail
                    </p>
                    <div
                        className={'methods__wrapper'}
                    >
                        <ContactMethod
                            image={'call'}
                        >
                            <Phone/>
                        </ContactMethod>
                        <ContactMethod
                            image={'mail'}
                        >
                            <Mail/>
                        </ContactMethod>
                    </div>
                </>
            </Section>
        </ContactStyled>
    )
}

interface Props {
    setLoaded: Dispatch<SetStateAction<boolean>>
}

export default ({
    setLoaded
}: Props) => {
    return (
        <>
            <Hero
                setLoaded={setLoaded}
            />
            <Contact/>
            <Description/>
        </>
    )
}
