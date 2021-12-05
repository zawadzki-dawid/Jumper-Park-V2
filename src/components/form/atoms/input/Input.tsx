import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { FocusEvent, InputHTMLAttributes, useRef } from 'react'

// Input

const InputStyled = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 16px;
    color: #E3E3E3;
    font-weight: 500;
    font-size: 1.8rem;
    box-sizing: border-box;
    border: 2px solid #E3E3E3;

    &:focus {
        color: var(--black);
        border: 2px solid var(--black);
    }
`

// Input

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    fieldName: string
}

export const Input = ({
    fieldName,
    ...rest
}: Props) => {
    // Formik
    const formikProps = useFormikContext()

    // Method
    const onBlur = (event: FocusEvent) => {
        formikProps.setFieldValue(fieldName, (event.target as HTMLInputElement).value)
    }

    return (
        <InputStyled
            onBlur={onBlur}
            {...rest}
        />
    )
}

// InputDate

export const InputDate = ({
    fieldName,
    ...rest
}: Props) => {
    // Formik
    const formikProps = useFormikContext()

    // Ref
    const inputRef = useRef<HTMLInputElement | null>(null)

    // Method
    const onBlur = (event: FocusEvent) => {
        (inputRef.current as HTMLInputElement).type = 'text'
        formikProps.setFieldValue(fieldName, (event.target as HTMLInputElement).value)
    }

    const onFocus = () => {
        (inputRef.current as HTMLInputElement).type = 'date'
    }

    return (
        <InputStyled
            type={'text'}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            {...rest}
        />
    )
}