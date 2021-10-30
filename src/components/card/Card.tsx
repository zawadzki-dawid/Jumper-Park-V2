import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import LazyImage from '../lazy-image/LazyImage'

const CARD_HEIGHT = 100

export interface Props {
    alt: string
    date: string
    title: string
    image: string
    content: string
}

interface TextProps {
    contentHeight: number
}

const Card = styled.div`
    box-shadow: 0 3px 8px var(--shadow-color);

    > div {
        display: grid;
        padding: 25px;
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1000px) {
        > div {
            column-gap: 25px;
            padding: 30px 200px 30px 30px;
            grid-template-columns: auto 1fr;
        }
    }
`

const Image = styled.div`
    display: none;
    overflow: hidden;

    @media only screen and (min-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    > p {
        font-size: var(--small-font-size);
    }

    h3 {
        margin-top: 15px;
        font-size: var(--default-font-size);
    }
`

const Text = styled.div<TextProps>`
    overflow-y: hidden;
    height: ${ CARD_HEIGHT }px;

    p {
        margin-top: 10px;
        word-break: break-all;
        font-size: var(--default-font-size);
    }

    &.card-enter, &.card-exit-done {
        height: ${ CARD_HEIGHT }px;
    }

    &.card-enter-active {
        height: ${ props => props.contentHeight }px;
        transition: height 300ms ease;
    }

    &.card-enter-done {
        height: fit-content;
    }

    &.card-exit {
        height: ${ props => props.contentHeight }px;
    }

    &.card-exit-active, &.card-exit-done {
        height: ${ CARD_HEIGHT }px;
        transition: height 300ms ease;
    }
`

const Button = styled.button`
    font-weight: 500;
    width: fit-content;
    color: var(--orange-main);
    padding: 15px 15px 0 15px;
    transform: translateX(-15px);
    font-size: var(--small-font-size);

    &::after {
        width: 100%;
        content: '';
        display: block;
        height: var(--border-width);
        background-color: var(--orange-main);
    }
`

export default ({
    alt,
    date,
    title,
    image,
    content
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [overflow, setOverflow] = useState<boolean>(false)
    const [contentHeight, setContentHeight] = useState<number>(0)

    // Ref
    const imageRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLParagraphElement | null>(null)

    // Effect
    useEffect(() => {        
        if (!textRef.current) {
            return
        }

        setOverflow(doesOverflow())
        const observer = new ResizeObserver(onResize)
        observer.observe(textRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (!(contentRef.current && imageRef.current)) {
            return
        }

        const height = contentRef.current.clientHeight
        imageRef.current.style.height = `${height}px`;
    }, [])

    // Method
    const onResize = (entries: ResizeObserverEntry[]) => {
        entries.map(() => {
            setOverflow(doesOverflow())
        })
    }

    const doesOverflow = (): boolean => {
        if (!(contentRef.current && textRef.current)) {
            return false
        }

        return textRef.current.clientHeight > CARD_HEIGHT
    }

    const onButton = () => {
        if (!textRef.current) {
            return
        }

        setContentHeight(textRef.current.clientHeight)
        setIsOpen(!isOpen)
    }

    return (
        <Card>
            <div>
                <Image
                    ref={imageRef}
                >
                    <LazyImage
                        alt={alt}
                        image={image}
                    />
                </Image>
                <Wrapper>
                    <Content
                        ref={contentRef}
                    >
                        <p>
                            { date }
                        </p>
                        <h3>
                            { title }
                        </h3>
                        <CSSTransition
                            in={isOpen}
                            timeout={300}
                            classNames={'card'}
                        >
                            <Text
                                contentHeight={contentHeight}
                            >
                                <p
                                    ref={textRef}
                                >
                                    { content }
                                </p>
                            </Text>
                        </CSSTransition>
                    </Content>
                    {
                        overflow && (
                            <Button
                                type={'button'}
                                onClick={onButton}
                            >
                                {
                                    isOpen ? 'Zwiń' : 'Rozwiń'
                                }
                            </Button>
                        )
                    }
                </Wrapper>
            </div>
        </Card>
    )
}