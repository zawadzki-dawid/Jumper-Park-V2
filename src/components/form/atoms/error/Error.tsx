import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useMemo } from 'react'

// Error

export interface Props {
    message: string
    fields?: string[]
}

const Error = styled.p`
    font-weight: 500;
    color: #F83600;
    font-size: 2.0rem;
    text-align: center;
    font-style: italic;
    margin-bottom: 20px;
`

export default ({
    message,
    fields = [],
}: Props) => { 
    // Formik
    const formikProps = useFormikContext()

    // Method
    const isFormValid = useMemo((): boolean => {
        if (fields.length === 0) {
            return Object.keys(formikProps.errors).length === 0
        }
        for (const field of fields) {
            if (field in formikProps.errors) {
                return false
            }
        }
        return true
    }, [formikProps.errors])

    return (
        <>
        {
            !isFormValid && (
                <Error>
                    {message}
                </Error>
            )
        }
        </>
    )
}