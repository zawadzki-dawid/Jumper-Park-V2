/* import { useField } from 'formik'
import styled from 'styled-components'
import { useMemo, useRef, useState, MouseEvent } from 'react'

// Components
import { BaseStyle, Props as PropsMain } from '../Input'

// Main

type PropsDropdown = {
    options: string[]
    onOptionClick: (value: string) => void
}

export type Props = PropsMain & Omit<PropsDropdown, 'onOptionClick'>

const DropdownStyled = styled.div`
    top: 102%;
    width: 100%;
    z-index: 10;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    box-sizing: border-box;
    background-color: var(--white);
    border: var(--border-width) solid var(--black);
    ul {
        height: fit-content;
    }
    li {
        padding: 7px 10px;
        font-size: var(--default-font-size);
        &:hover {
            cursor: pointer;
        }
    }
    input {
        width: 100%;
        display: block;
    }
`

const Dropdown = ({
    options,
    onOptionClick
}: PropsDropdown) => {
    // Method
    const onMouseDown = (event: MouseEvent) => {
        event.preventDefault()
    }

    return (
        <DropdownStyled>
            <ul>
            {
                options.map((option, index) =>
                    <li
                        key={index}
                        onClick={() => onOptionClick(option)}
                        onMouseDown={onMouseDown}
                    >
                        {option}
                    </li>
                )
            }
            </ul>
        </DropdownStyled>
    )
}

const SelectStyled = styled.div`
    ${BaseStyle};
    position: relative;
`

export default ({
    label,
    options,
    ...rest
}: Props) => {
    // Formik
    // @ts-ignore
    const [field, meta] = useField(rest)

    // Ref
    const inputRef = useRef<HTMLInputElement | null>(null)

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<string>(options[0])

    // Method
    const onBlur = () => {
        setIsOpen(false)
    }

    const onFocus = () => {
        setIsOpen(true)
    }

    const onOptionClick = (value: string) => {
        setCurrentValue(value)
        ;(inputRef.current as HTMLInputElement).blur()
    }

    const optionsFilter = useMemo(() => {
        return options.filter((option) => option !== currentValue)
    }, [currentValue, setCurrentValue])

    return (
        <SelectStyled>
            <label>
                {label}
            </label>
            <input
                {...field}
                ref={inputRef}
                readOnly={true}
                onBlur={onBlur}
                onFocus={onFocus}
                value={currentValue}
            />
            {
                isOpen && (
                    <Dropdown
                        options={optionsFilter}
                        onOptionClick={onOptionClick}
                    />
                )
            }
            {
                meta.touched && meta.error && (
                    <p>
                        {meta.error}
                    </p>
                )
            }
        </SelectStyled>
    )
} */

export default () => {
    return (
        <></>
    )
}