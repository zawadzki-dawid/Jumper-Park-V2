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
        padding: 0px 30px 20px;
        grid-template-rows: 1fr auto;
        background: transparent linear-gradient(180deg, #00000096 0%, #00000096 100%) 0% 0% no-repeat padding-box;
    }

    .content__wrapper {
        display: flex;
        align-self: center;
        align-items: center;
        flex-direction: column;

        .title {
            display: flex;
            flex-wrap: wrap;
            font-weight: 500;
            line-height: 1.25;
            color: var(--white);
            margin-bottom: 20px;
            justify-content: center;
            font-size: clamp(3.5rem, 3.0000rem + 1.5625vw, 5rem);

            span {
                color: rgb(249, 187, 29); 
            }
        }

        .description {
            max-width: 720px;
            line-height: 1.4;
            font-weight: 400;
            text-align: center;
            margin-bottom: 40px;
            color: var(--white);
            font-size: clamp(1.6rem, 1.4667rem + 0.4167vw, 2rem);
        }
    }

    .actions__wrapper {
        width: 100%;
        max-width: calc(290px + 40px);
    }

    .buttons__wrapper {
        display: grid;
        gap: 20px 40px;
        flex-wrap: wrap;
        grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    }

    @media only screen and (min-width: 1000px) {
        .title {
            flex-direction: row;
            justify-content: center;
        }

        .description {
            margin-bottom: 60px;
        }
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
                    <h1 className={'title'}>
                        Jumper Park <span>&nbsp;Trampolin</span>
                    </h1>
                    <p className={'description'}>
                        Chcesz połączyć trening ze znakomitą zabawą?
                        W takim razie nie mogłeś lepiej trafić! 
                        Dzięki nam Ty i Twoi znajomi możecie odpocząć od codziennych trosk.
                    </p>
                    <div className={'actions__wrapper'}>
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