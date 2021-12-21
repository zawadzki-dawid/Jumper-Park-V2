import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

export interface Props {
    alt: string
    image: string
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    min-width: 100%;
    position: relative;
    justify-content: center;
`

const Image = styled.img`
    height: 100%;
    max-width: 100%;
`

const Loader = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--image-loader-gradient);
    background-size: 400% 400%;
    animation: loading 1.5s ease infinite;

    @keyframes loading {
        0% {
            background-position: 31% 0%;
        }

        50% {
            background-position: 70% 100%;
        }

        100% {
            background-position: 31% 0%;
        }
    }
`

export default ({
    alt,
    image
}: Props) => {
    // State
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    // Ref
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    // Effect
    useEffect(() => {
        if (!wrapperRef.current) {
            return
        }

        if (isVisibleOnRender()) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.01,
            rootMargin: '30px 30px'
        })
        observer.observe(wrapperRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    // Method
    const isVisibleOnRender = () => {
        if (!wrapperRef.current) {
            return
        }
        return window.innerHeight - wrapperRef.current.offsetTop > 0
    }

    const onIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        })
    }

    const onLoaded = () => {
        setIsLoading(false)
    }

    return (
        <Wrapper
            ref={wrapperRef}
        >
            {
                isVisible && (
                    <Image
                        alt={alt}
                        src={image}
                        onLoad={onLoaded}
                    />
                )
            }
            {
                isVisible && isLoading && <Loader/>
            }
        </Wrapper>
    )
}
