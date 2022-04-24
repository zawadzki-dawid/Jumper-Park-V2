import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useMemo, useEffect, useRef, useState } from 'react'

// Assets
import DefaultImage from '../../assets/logo/logo-text.png'

// Components
import LazyImage from '../lazy-image/LazyImage'

const CARD_HEIGHT = 100

export type PropsFeed = {
    alt: string
    url: string
    date: string
    content: string 
}

export interface Props {
    feed: PropsFeed | null
}

interface TextProps {
    contentHeight: number
}

const Card = styled.div`
    padding: 50px 25px;
    box-shadow: 0 3px 8px var(--shadow-color);
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
        margin-bottom: 10px;
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

    > div {
        * {
            font-family: 'Poppins', sans-serif;
            font-size: var(--default-font-size);
        }
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

    @media only screen and (min-width: 1000px) {
        p {
            max-width: 600px;
        }
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

const FeedWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 1000px) {
        column-gap: 50px;
        grid-template-columns: 250px 1fr;
    }
`

const Feed = ({
    alt,
    url,
    date,
    content
}: PropsFeed) => {
    // Ref
    const nodeRef = useRef<HTMLDivElement | null>(null)

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
        entries.map(() => setOverflow(doesOverflow()))
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

    const cutDate = useMemo((): string => {
        const dateUS = date.split('T')[0]
        return dateUS.split('-').reverse().join('/')
    }, [date])

    return (
        <FeedWrapper>
            <Image
                ref={imageRef}
            >
                <LazyImage
                    alt={alt}
                    image={url || DefaultImage}
                />
            </Image>
            <Wrapper>
                <Content
                    ref={contentRef}
                >
                    <p>
                        { cutDate }
                    </p>
                    <CSSTransition
                        in={isOpen}
                        timeout={300}
                        nodeRef={nodeRef}
                        classNames={'card'}
                    >
                        <Text
                            ref={nodeRef}
                            contentHeight={contentHeight}
                        >
                            <div
                                ref={textRef}
                                dangerouslySetInnerHTML={{__html: content }}
                            />
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
        </FeedWrapper>
    )
}

const EmptyWrapper = styled.p`
    margin: auto;
    padding: 30px 0;
    font-weight: 500;
    font-size: 1.6rem;
    width: fit-content;
    justify-self: center;
`

const Empty = () => {
    return (
        <EmptyWrapper>
            Brak nowych aktualności
        </EmptyWrapper>
    )
}

export default ({
    feed
}: Props) => {
    return (
        <Card>
        {
            feed ? (
                <Feed
                    {...feed}
                />
            ) : (
                <Empty/>
            )
        }
        </Card>
    )
}