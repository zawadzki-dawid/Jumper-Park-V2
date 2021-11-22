import { css } from 'styled-components'
import { FieldHookConfig } from 'formik'

export type Props = {
    label: string
} & FieldHookConfig<any>

export const BaseStyle = css`
    flex: 1;
    gap: 5px;
    display: grid;
    height: fit-content;
    grid-auto-rows: auto;
    grid-template-rows: auto 45px;

    label {
        font-weight: 500;
        font-size: 1.8rem;
    }

    input, textarea {
        width: 100%;
        padding: 0 10px;
        font-weight: 400;
        font-size: 1.6rem;
        box-sizing: border-box;
        border: var(--border-width) solid var(--black);
    }

    p {
        font-size: 1.4rem;
        color: var(--orange-main);
    }
`