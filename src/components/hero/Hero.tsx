import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { ButtonHTMLAttributes } from 'react'

// Assets
import Icon from '../icon/Icon'
import Hero from '../../assets/images/hero/hero.jpg'

// Scroll

interface PropsScroll extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Empty for now
}

const ScrollStyled = styled.button`
    row-gap: 7px;
    display: grid;
    justify-items: center;
    grid-template-rows: 70px auto;

    > img {
        animation: scroll 0.7s infinite;
        animation-direction: alternate;
    }

    > span {
        font-size: 1.8rem;
        font-style: italic;
        color: var(--orange-main);
    }

    &:hover {
        cursor: pointer;
    }

    @keyframes scroll {
        from {
            transform: translateY(0px);
        }

        to {
            transform: translateY(-10px);
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
            <span>
                Aktualności
            </span>
        </ScrollStyled>
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
        height:100%;
        position: absolute;
        box-sizing: border-box;
        padding: 70px 30px 20px;
        background: transparent linear-gradient(180deg, #FFFFFF45 0%, #FFFFFFDE 100%) 0% 0% no-repeat padding-box;
    }

    .content__wrapper {
        height: 100%;
        margin: auto;
        display: grid;
        max-width: 1230px;
        align-items: space-between;
        grid-template-rows: 1fr auto;

        h1 {
            display: flex;
            font-weight: 500;
            font-size: 2.6rem;
            text-align: center;
            flex-direction: column;
        }

        h1 > span {
            color: var(--orange-main);
        }

        p {
            display: flex;
            margin-top: 20px;
            font-weight: 500;
            font-size: clamp(1.8rem, 2vw, 3.5rem);
            text-align: center;
            color: var(--black);
            flex-direction: column;
        }

        @media only screen and (min-width: 900px) {
            h1 {
                text-align: left;
                flex-direction: row;
            }

            p {
                text-align: left;
            }
        }
    }
`

export default () => {
    // Ref
    const imageRef = useRef<HTMLImageElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    // Method
    const getElementSize = (element: HTMLElement | null): RectType => element?.getBoundingClientRect() ?? defaultRect

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

    const scrollToContent = () => window.scrollBy({
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
            <div className="hero__content">
                <div className="content__wrapper">
                    <div>
                        <h1>
                            Jumper Park <span>&nbsp;Trampolin</span>
                        </h1>
                        <p>
                            <span>Chcesz połączyć trening ze znakomitą zabawą?</span>
                            <span>W takim razie nie mogłeś lepiej trafić!</span>
                            <span>Dzięki nam Ty i Twoi znajomi możecie odpocząć od codziennych trosk</span>
                        </p>
                    </div>
                    <Scroll
                        onClick={scrollToContent}
                    />
                </div>
            </div>
        </Wrapper>
    )
}