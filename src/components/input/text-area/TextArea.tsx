import { useField } from 'formik'
import styled from 'styled-components'

// Components
import { BaseStyle, Props as PropsMain } from '../Input'

// Main

export type Props = PropsMain

const TextAreaStyled = styled.div`
    ${BaseStyle};
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    textarea {
        display: block;
        padding: 10px 10px;
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
        <TextAreaStyled>
            <label>
                {label}
            </label>
            <textarea
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
        </TextAreaStyled>
    )
}