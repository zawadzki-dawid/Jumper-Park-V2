import styled from 'styled-components'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import Icon from '../icon/Icon' 

type Question = {
    question: string
    answer: string
}

export interface Props {
    section: string
    questions: Question[] 
}

interface QuestionProps {
    isOpen: boolean
}

interface DropdownProps {
    height: number
}

const StyledQuestion = styled.div<QuestionProps>`
    button {
        width: 100%;
        display: flex;
        padding: 10px 0px;
        align-items: center;
        justify-content: space-between;
        border-bottom: var(--border-width) solid var(--black);


        h3 {

        }

        i {
            transform: ${ props => props.isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)' };
            transition: transform 300ms;
        }
    }
`

const StyledDropdown = styled.div<DropdownProps>`
    max-height: 0px;
    overflow-y: hidden;

    &.dropdown-enter, &.dropdown-exit-done {
        max-height: 0px;
    }

    &.dropdown-enter-active {
        max-height: ${ props => props.height }px;
        transition: max-height 300ms ease;
    }

    &.dropdown-enter-done {
        max-height: fit-content;
    }

    &.dropdown-exit {
        max-height: ${ props => props.height }px;
    }

    &.dropdown-exit-active, &.dropdown-exit-done {
        max-height: 0px;
        transition: max-height 300ms ease;
    }

    ul {
        display: grid;
        row-gap: 20px;
        padding-top: 20px;
        grid-template-columns: 1fr;

        @media only screen and (min-width: 800px) {
            gap: 20px 20px;
            grid-template-columns: 1fr 1fr;
        }

        p {
            margin-top: 5px;
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

    // Method
    const onButtonClick = () => {
        if (!dropdownRef.current) {
            return
        }

        setDropdownHeight(dropdownRef.current.clientHeight)
        setIsOpen(!isOpen)
    }

    return (
        <StyledQuestion
            isOpen={isOpen}
        >
            <button
                onClick={onButtonClick}
            >
                <h3>
                    { section }
                </h3>
                <Icon
                    width={20}
                    height={20}
                    image={'icon-arrow'}
                />
            </button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={'dropdown'}
            >
                <StyledDropdown
                    height={dropdownHeight}
                >
                    <ul
                        ref={dropdownRef}
                    >
                    {
                        questions.map((data, index) =>
                            <li
                                key={index}
                            >
                                <h4>
                                    { data.question }
                                </h4>
                                <p>
                                    { data.answer }
                                </p>
                            </li>
                        )
                    }
                    </ul>
                </StyledDropdown>
            </CSSTransition>
        </StyledQuestion>
    )
}