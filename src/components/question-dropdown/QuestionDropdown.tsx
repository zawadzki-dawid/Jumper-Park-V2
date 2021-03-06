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
    padding: 8px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border-width) solid var(--black);

    h3 {
        font-weight: 700;
        font-size: 1.6rem;
    }

    div {
        height: 26px;
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

    h4 {
        font-weight: 700;
        font-size: 1.6rem;
    }

    p {
        margin-top: 5px;
        font-weight: 400;
        font-size: 1.6rem;
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
    const nodeRef = useRef<HTMLDivElement | null>(null)
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
                        image={'arrow'}
                    />
                </div>
            </Button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                nodeRef={nodeRef}
                classNames={'dropdown'}
            >
                <Dropdown
                    ref={nodeRef}
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