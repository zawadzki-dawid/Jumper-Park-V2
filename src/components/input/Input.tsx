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
        font-weight: medium;
        font-size: var(--label-font-size);
    }

    input, textarea {
        width: 100%;
        padding: 0 10px;
        font-weight: medium;
        box-sizing: border-box;
        font-size: var(--default-font-size);
        border: var(--border-width) solid var(--black);
    }

    p {
        font-size: 1.4rem;
        color: var(--orange-main);
    }
`