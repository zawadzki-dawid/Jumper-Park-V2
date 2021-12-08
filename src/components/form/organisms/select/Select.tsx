import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useEffect, useState, useRef, useMemo, InputHTMLAttributes } from 'react'

// Components
import { Input } from '../../atoms/input/Input'

// Main

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    options: string[]
    fieldName: string
}

interface PropsDropdown extends Pick<Props, 'options'> {
    isOpen: boolean
    onClick: (value: string) => void
}

const DropdownStyled = styled.ul`
    width: 100%;
    overflow-y: auto;
    max-height: 120px;
    position: absolute;
    height: fit-content;
    top: calc(100% + 5px);
    box-sizing: border-box;
    background-color: var(--white);
    border: 2px solid var(--black);

    li {
        display: flex;
        font-weight: 500;
        padding: 8px 16px;
        font-size: 1.8rem;
        align-items: center;
    }

    li:hover {
        cursor: pointer;
    }
`

const Dropdown = ({
    isOpen,
    options,
    onClick
}: PropsDropdown) => {
    // Method
    const onMouseDown = (event: MouseEvent) => {
        event.preventDefault()
    }

    return (
        <>
        {
            isOpen && (
                <DropdownStyled>
                {
                    options.map((option, index) => 
                        <li
                            key={index}
                            // @ts-ignore
                            onMouseDown={onMouseDown}
                            onClick={() => onClick(option)}
                        >
                            {option}
                        </li>
                    )
                }
                </DropdownStyled>
            )
        }
        </>
    )
}

const Select = styled.div`
    height: 100%;
    position: relative;

    &:focus {
        color: var(--black);
    }
`

export default ({
    options,
    fieldName,
    ...rest
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('')

    // Ref
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    // Formik
    const formikProps = useFormikContext()

    // Effect
    useEffect(() => {
        formikProps.setFieldValue(fieldName, selected)
    }, [selected])

    // Method
    const onBlur = () => {
        setIsOpen(false)
    }

    const onFocus = () => {
        setIsOpen(true)
    }

    const onOptionClick = (value: string) => {
        setSelected(value)
        ;(inputRef.current as HTMLInputElement).blur()
    }

    const optionsFilter = useMemo(() => {
        return options.filter((option) => option !== selected)
    }, [selected, setSelected])

    return (
        <Select>
            <Input
                ref={inputRef}
                readOnly={true}
                onBlur={onBlur}
                value={selected}
                onFocus={onFocus}
                fieldName={fieldName}
                {...rest}
            />
            <Dropdown
                isOpen={isOpen}
                options={optionsFilter}
                onClick={onOptionClick}
            />
        </Select>
    )
}