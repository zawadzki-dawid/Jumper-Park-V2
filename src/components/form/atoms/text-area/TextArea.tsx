import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { FocusEvent, TextareaHTMLAttributes } from 'react'

// Input

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    outline: none;
    color: #E3E3E3;
    font-weight: 500;
    font-size: 1.8rem;
    padding: 16px 16px;
    box-sizing: border-box;
    border: 2px solid #E3E3E3;

    &:focus {
        color: var(--black);
        border: 2px solid var(--black);
    }
`

// Main

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    fieldName: string
}

export default ({
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
        <TextArea
            {...rest}
            onBlur={onBlur}
        />
    )
}