import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

// Components
import Icon from '../icon/Icon' 

type Question = {
    question: string,
    answer: string
}

export interface Props {
    section: string,
    questions: Question[] 
}

interface DropdownProps {
    dropdownHeight: number,
    isOpen: boolean
}

const QuestionDropdown = styled.div<DropdownProps>`
    > button {
        display: flex;
        background: none;
        border: none;
        border-bottom: var(--border-width) solid var(--black);
        width: 100%;
        padding: 10px 0px;
        justify-content: space-between;

        &:hover {
            cursor: pointer;
        }

        > i {
            transform: ${ props => props.isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)' };
            transition: transform 300ms;
        }
    }

    > div {
        overflow-y: hidden;
        max-height: 0px;

        &.dropdown-enter, &.dropdown-exit-done {
            max-height: 0px;
        }

        &.dropdown-enter-active {
            max-height: ${ props => props.dropdownHeight }px;
            transition: max-height 300ms ease;
        }

        &.dropdown-enter-done {
            max-height: fit-content;
        }

        &.dropdown-exit {
            max-height: ${ props => props.dropdownHeight }px;
        }

        &.dropdown-exit-active, &.dropdown-exit-done {
            max-height: 0px;
            transition: max-height 300ms ease;
        }

        > ul {
            list-style-type: none;
            padding-top: 20px;
            grid-template-columns: 1fr;
            display: grid;
            row-gap: 20px;

            li {
                h4 {
                    margin-bottom: 5px;
                }
            }
        }
    }

    @media only screen and (min-width: 800px) {
        > div > ul {
            grid-template-columns: 1fr 1fr;
            gap: 20px 20px;
        }
    }
`

export default ({
    section,
    questions
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [dropdownHeight, setDropdownHeight] = useState<number>(0)

    // Ref
    const dropdownRef = useRef<HTMLUListElement | null>(null)

    // Effects
    useEffect(() => {
        if (dropdownRef.current === null) {
            return
        } 

        setDropdownHeight(dropdownRef.current.clientHeight)
    }, [dropdownRef.current])

    return (
        <QuestionDropdown
            dropdownHeight={dropdownHeight}
            isOpen={isOpen}
        >
            <button
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <h3>
                    { section }
                </h3>
                <Icon
                    image={'icon-arrow'}
                    width={20}
                    height={20}
                />
            </button>
            <CSSTransition
                timeout={300}
                in={isOpen}
                classNames={'dropdown'}
            >
                <div>
                    <ul
                        ref={dropdownRef}
                    >
                        {
                            questions.map((data, index) => {
                                const { question, answer } = data

                                return (
                                    <li
                                        key={index}
                                    >
                                        <h4>
                                            { question }
                                        </h4>
                                        <p>
                                            { answer }
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </CSSTransition>
        </QuestionDropdown>
    )
}