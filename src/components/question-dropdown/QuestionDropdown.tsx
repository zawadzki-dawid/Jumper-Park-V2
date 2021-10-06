import styled from 'styled-components'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import Icon from '../icon/Icon' 

type Question = {
    answer: string
    question: string
}

export interface Props {
    section: string
    questions: Question[] 
}

interface ButtonProps {
    isOpen: boolean
}

interface DropdownProps {
    dropdownHeight: number
}

const Button = styled.button<ButtonProps>`
    width: 100%;
    display: flex;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border-width) solid var(--black);

    div {
        width: 20px;
        height: 20px;
        transition: transform 300ms;
        transform: ${ props => props.isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)' };
    }
`

const Dropdown = styled.div<DropdownProps>`
    max-height: 0px;
    overflow-y: hidden;

    ul {
        display: grid;
        row-gap: 20px;
        padding-top: 20px;
        grid-template-columns: 1fr;

        @media only screen and (min-width: 800px) {
            gap: 20px 20px;
            grid-template-columns: 1fr 1fr;
        }
    }

    p {
        margin-top: 5px;
    }

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
        <div>
            <Button
                isOpen={isOpen}
                onClick={onButtonClick}
            >
                <h3>
                    { section }
                </h3>
                <div>
                    <Icon
                        image={'icon-arrow'}
                    />
                </div>
            </Button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={'dropdown'}
            >
                <Dropdown
                    dropdownHeight={dropdownHeight}
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
                </Dropdown>
            </CSSTransition>
        </div>
    )
}