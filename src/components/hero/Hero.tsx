import styled from 'styled-components'
import { useRef, useEffect } from 'react'

// Assets
import Hero from '../../assets/images/hero/hero.jpg'

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

    img {
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
        top: 15%;
        width: 100%;
        display: flex;
        margin: 0 30px;
        position: absolute;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-weight: 700;
            font-size: 2.3rem;
            text-align: center;
        }

        h1 > span {
            color: var(--orange-main);
        }

        p {
            color: var(--white);
            margin: 40px auto 0;
            font-weight: 500;
            font-size: 2.0rem;
            text-align: center;
            max-width: 600px;
        }
    }

    .hero__overlay {
        width: 100%;
        height:100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
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
                ref={imageRef}
                onLoad={onImageLoad}
            />
            <div className="hero__overlay"/>
            <div className="hero__content">
                <h1>
                    Jumper Park <span>Trampolin</span>
                </h1>
                <p>
                    Chcesz połączyć trening ze znakomitą zabawą? W takim razie nie mogłeś lepiej trafić! 
                    Dzięki nam Ty i Twoi znajomi możecie odpocząć od codziennych trosk
                </p>
            </div>
        </Wrapper>
    )
}