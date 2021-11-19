import { useField } from 'formik'
import styled from 'styled-components'

// Components
import { BaseStyle, Props as PropsMain } from '../Input'

// Main

export type Props = PropsMain

const InputStyled = styled.div`
    ${BaseStyle};
    grid-template-columns: 1fr;

    input {
        display: block;
    }
`

export default ({
    label,
    ...rest
}: Props) => {
    // Formik
    // @ts-ignore
    const [field, meta] = useField(rest)

    return (
        <InputStyled>
            <label>
                {label}
            </label>
            <input
                {...field}
                autoComplete={'off'}
            />
            {
                meta.touched && meta.error && (
                    <p>
                        {meta.error}
                    </p>
                )
            }
        </InputStyled>
    )
}