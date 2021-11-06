/* import styled from 'styled-components'
import { useField, FieldHookConfig } from 'formik'

interface PropsInput {
    label: string
    props: string | FieldHookConfig<any>
}

const InputStyled = styled.div`

`

export const Input = ({
    label,
    ...props
}: PropsInput) => {
    // Formik
    const [field, meta] = useField({ props })

    return (
        <InputStyled>
            <label>
                { label }
            </label>
            <input
                {...field}
            />
            {
                meta.touched && meta.error && (
                    <p>
                        {
                            meta.error
                        }
                    </p>
                )
            }
        </InputStyled>
    )
}

export const TextArea = ({
    label,
    ...props
}: PropsInput) => {
    // Formik
    const [field, meta] = useField(props)

    return (
        <InputStyled>
            <label>
                { label }
            </label>
            <textarea
                {...field}
            />
            {
                meta.touched && meta.error && (
                    <p>
                        { meta.error }
                    </p>
                )
            }
        </InputStyled>
    )
}

export const Select = ({
    label,
    props
}: PropsInput) => {
    // Formik
    const [field, meta] = useField(props)

    return (
        <InputStyled>
            <label>
                { label }
            </label>
            <select>
            </select>
            {
                meta.touched && meta.error && (
                    <p>
                        { meta.error }
                    </p>
                )
            }
        </InputStyled>
    )
} */

import styled, { css } from 'styled-components'

export interface Props {
    label: string
}

export interface PropsSelect extends Props {
    options: string[]
}

const Base = css`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
        font-size: var(--default-font-size);
    }
`

// Input component

const InputStyled = styled.div`
    ${Base};

    input {
        padding: 10px;
        font-size: var(--default-font-size);
        border: var(--border-width) solid var(--black);
    }
`

export const Input = ({
    label
}: Props) => {
    return (
        <InputStyled>
            <label>
                {
                    label
                }
            </label>
            <input/>
        </InputStyled>
    )
}

// TextArea component

const TextAreaStyled = styled.div`
    ${Base};
    height: 100%;

    textarea {
        height: 100%;
        padding: 10px;
        font-size: var(--default-font-size);
        border: var(--border-width) solid var(--black);
    }
`

export const TextArea = ({
    label
}: Props) => {
    return (
        <TextAreaStyled>
            <label>
                {
                    label
                }
            </label>
            <textarea/>
        </TextAreaStyled>
    )
}

// Select component

const SelectStyled = styled.div`
    ${Base};

    select {
        padding: 10px;
        font-size: var(--default-font-size);
        border: var(--border-width) solid var(--black);
    }
`

export const Select = ({
    label,
    options
}: PropsSelect) => {
    return (
        <SelectStyled>
            <label>
                {
                    label
                }
            </label>
            <select>
            {
                options.map((option) =>
                    <option
                        value={option}
                    >
                    {
                        option
                    }
                    </option>
                )
            }
            </select>
        </SelectStyled>
    )
}