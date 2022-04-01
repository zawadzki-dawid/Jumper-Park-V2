import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { ButtonHTMLAttributes } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import Icon from '../icon/Icon'
import Hero from '../../assets/images/hero/hero.jpg'

// Scroll

interface PropsScroll extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Empty for now
}

const ScrollStyled = styled.button`
    height: 60px;
    display: flex;
    justify-content: center;

    > img {
        height: 100%;
        animation: scroll 0.7s infinite;
        animation-direction: alternate;
    }
   
    &:hover {
        cursor: pointer;
    }

    @keyframes scroll {
        from {
            transform: translateY(0px);
        }

        to {
            transform: translateY(-8px);
        }
    }
`

const Scroll = ({
    onClick
}: PropsScroll) => {
    return (
        <ScrollStyled
            type={'button'}
            onClick={onClick}
        >
            <Icon
                image={'scroll'}
            />
        </ScrollStyled>
    )
}

// Button

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const ButtonStyled = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--black);
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    background-color: rgb(249, 187, 29);

    &:hover {
        color: var(--white);
        background-color: transparent;
        border: 3px solid rgb(249, 187, 29);
    }

`

const Button = ({
    text,
    ...rest
}: PropsButton) => {
    return (
        <ButtonStyled
            {...rest}
        >
            {text}
        </ButtonStyled>
    )
}

// Main

type RectType = {
    width: number
    height: number
}

const defaultClassName = 'full-height'

const defaultRect: RectType = { width: 0, height: 0 }

const Wrapper = styled.div`
    overflow: hidden;
    max-height: 1440px;
    position: relative;
    height: calc(100vh - var(--nav-mobile-height));

    > img {
        top: 50%;
        left: 50%;
        width: 100%;
        height: auto;
        position: absolute;
        transform: translate(-50%, -50%);

        &.full-height {
            width: auto;
            height: 100%;
        }
    }

    .hero__content {
        width: 100%;
        height: 100%;
        display: grid;
        position: absolute;
        box-sizing: border-box;
        padding: 250px 30px 20px;
        align-content: space-between;
        background: transparent linear-gradient(180deg, #00000096 0%, #00000096 100%) 0% 0% no-repeat padding-box;
    }

    .content__wrapper {
        width: 100%;
        margin: auto;
        display: flex;
        max-width: 1280px;
        justify-content: center;
    }

    .title {
        display: flex;
        font-weight: 500;
        line-height: 1.25;
        color: var(--white);
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
        font-size: clamp(3.5rem, 3.0000rem + 1.5625vw, 5rem);

        span {
            color: rgb(249, 187, 29); 
        }
    }

    .description {
        line-height: 1.4;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
        color: var(--white);
        font-size: clamp(1.6rem, 1.4667rem + 0.4167vw, 2rem);
    }

    .buttons__wrapper {
        margin: auto;
        display: grid;
        gap: 20px 40px;
        max-width: calc(144px + 144px + 40px);
        grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
    }

    /* .title__wrapper {
        line-height: 1.25;
        gap: 15px 35px;
        // display: grid;
        width: fit-content;
        height: fit-content;
        flex-direction: column;
    }

    .title__wrapper {
        font-weight: 500;
        font-size: 1.8rem;
    }

    .title__wrapper > h1 {
        display: flex;
        font-weight: 400;
        text-align: center;
        // flex-direction: column;
        color: var(--white);
        font-size: clamp(3.84rem, -0.4rem + 10vw, 5rem);

        span {
            color: var(--orange-main); 
        }
    }

    .title__wrapper > p {
        width: 200px;
        color: var(--white);
    } */

    @media only screen and (min-width: 1000px) {
        .title {
            flex-direction: row;
            justify-content: center;
        }

        .description {
            max-width: 720px;
            margin-bottom: 60px;
        }

        /* .hero__content {
            padding: 200px 50px 20px;
        }

        .content__wrapper {
            justify-content: start;
        }

        .title__wrapper {
            // grid-template-rows: auto auto auto;
            // grid-template-columns: 1fr 1fr;
        }

        .title__wrapper > h1 {
            padding-bottom: 20px;
            text-align: left;
            grid-area: 1 / 1 / 2 / 3;
        }

        .title__wrapper > p {
            width: 720px;
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 400;
            padding-bottom: 60px;
            text-align: left;
            grid-area: 2 / 1 / 3 / 3;
        }

        .xd {
            gap: 0 40px;
            display: grid;
            grid-template-rows: 45px;
            grid-template-columns: 135px 135px;

            > button {
                font-weight: 500;
                text-transform: none;
            }
        } */
    }
`

export default () => {
    // Ref
    const imageRef = useRef<HTMLImageElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    // History
    const history = useHistory()

    // Method
    const getElementSize = (element: HTMLElement | null): RectType => element?.getBoundingClientRect() ?? defaultRect

    const openBookingView = () => history.push('/kupbilet')

    const toggleImageClass = () => {
        const { width: imageWidth, height: imageHeight } = getElementSize(imageRef.current)
        const { width: wrapperWidth, height: wrapperHeight } = getElementSize(wrapperRef.current)
        
        if (imageHeight < wrapperHeight) {
            imageRef.current?.classList.add(defaultClassName)
        } 
        else if (imageWidth < wrapperWidth) {
            imageRef.current?.classList.remove(defaultClassName)
        }
    }

    const scrollToContent = () => window.scrollTo({
        behavior: 'smooth',
        top: window.innerHeight
    })

    const onImageLoad = () => {
        toggleImageClass()
    }

    // Effect
    useEffect(() => {
        const observer = new ResizeObserver(toggleImageClass)
        if (wrapperRef.current) observer.observe(wrapperRef.current)
        return () => observer.disconnect()
    }, [])



    return (
        <Wrapper
            ref={wrapperRef}
        >
            <img
                src={Hero}
                alt={'Baner'}
                ref={imageRef}
                onLoad={onImageLoad}
            />
            <div 
                className={'hero__content'}
            >
                <div
                    className={'content__wrapper'}
                >
                    <div
                        className={'title__wrapper'}
                    >
                        <h1 className={'title'}>
                            Jumper Park <span>&nbsp;Trampolin</span>
                        </h1>
                        <p className={'description'}>
                            Chcesz połączyć trening ze znakomitą zabawą?
                            W takim razie nie mogłeś lepiej trafić! 
                            Dzięki nam Ty i Twoi znajomi możecie odpocząć od codziennych trosk.
                        </p>
                        <div className={'buttons__wrapper'}>
                            <Button
                                text={'Kup bilet'}
                                onClick={openBookingView}
                            />
                            <Button
                                text={'Poznaj nas'}
                                onClick={scrollToContent}
                            />
                        </div>
                    </div>
                </div>
                <Scroll
                    onClick={scrollToContent}
                />
            </div>
        </Wrapper>
    )
}