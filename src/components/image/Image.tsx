import styled from 'styled-components'
import { useRef, useEffect, useLayoutEffect, ImgHTMLAttributes } from 'react'

type RectType = {
    width: number
    height: number
}

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    alt: string
    src: string
}

const defaultClassName = 'full-height'
const defaultRect: RectType = { width: 0, height: 0 }

const Wrapper = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;

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
`

export default ({
    alt,
    src,
    onLoad,
    ...rest
}: Props) => {
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
    
    useLayoutEffect(() => {
        onImageLoad()
    }, [src])

    return (
        <Wrapper
            ref={wrapperRef}
            className={'image'}
        >
            <img
                alt={alt}
                src={src}
                {...rest}
                ref={imageRef}
                onLoad={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    if (onLoad instanceof Function) {
                        onLoad(event)
                    }
                    onImageLoad()
                }}
            />
        </Wrapper>
    )
}