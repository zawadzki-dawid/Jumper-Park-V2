import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const CARD_HEIGHT = 80

export interface Props {
    date: string
    title: string
    content: string
}

interface ContentProps {
    cardHeight: number
    contentHeight: number
}

const Card = styled.div`
    box-shadow: 0 3px 8px var(--shadow-color);

    > div {
        padding: 20px;
    }
`

const Wrapper = styled.div`
    > h3 {
        margin-top: 10px;
    }

    > button {
        margin-top: 10px;
    }
`

const Content = styled.div<ContentProps>`
    height: 80px;
    margin-top: 5px;
    overflow-y: hidden;

    &.card-enter, &.card-exit-done {
        height: ${ props => props.cardHeight }px;
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
        height: ${ props => props.cardHeight }px;
        transition: height 300ms ease;
    }
`

export default ({
    date,
    title,
    content
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [overflow, setOverflow] = useState<boolean>(false)
    const [contentHeight, setContentHeight] = useState<number>(0)

    // Ref
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLParagraphElement | null>(null)

    // Effect
    useEffect(() => {        
        if (!contentRef.current) {
            return
        }

        setOverflow(doesOverflow())
        const observer = new ResizeObserver(onResize)
        observer.observe(contentRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    // Method
    const onResize = (entries: ResizeObserverEntry[]) => {
        entries.map(() => {
            setOverflow(doesOverflow())
        })
    }

    const onButton = () => {
        if (!contentRef.current) {
            return
        }

        setContentHeight(contentRef.current.clientHeight)
        setIsOpen(!isOpen)
    }

    const doesOverflow = (): boolean => {
        if (!(wrapperRef.current && contentRef.current)) {
            return false
        }

        return contentRef.current.clientHeight > CARD_HEIGHT
    }

    return (
        <Card>
            <div>
                <Wrapper>
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
                        <Content
                            ref={wrapperRef}
                            cardHeight={CARD_HEIGHT}
                            contentHeight={contentHeight}
                        >
                            <p
                                ref={contentRef}
                            >
                                { content }
                            </p>
                        </Content>
                    </CSSTransition>
                    {
                        overflow && (
                            <button
                                type={'button'}
                                onClick={onButton}
                            >
                                {
                                    isOpen ? 'Zwiń' : 'Rozwiń'
                                }
                            </button>
                        )
                    }
                </Wrapper>
            </div>
        </Card>
    )
}