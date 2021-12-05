import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    picked?: boolean
    rounded?: boolean
}

type PropsStyled = Required<Pick<Props, 'picked' | 'rounded'>>

// Filled

const ButtonStyled = styled.button<PropsStyled>`
    width: 100%;
    height: 100%;
    display: flex;
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--black);
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-transform: uppercase;
    border: 3px solid #F9BB1D;

    &:hover {
        background-color: #F9BB1D;
    }

    ${
        props => props.rounded && css`
            border-radius: 10px;
        `
    }

    ${
        props => props.picked && css`
            background-color: #F9BB1D;
        `
    }
`

export default ({
    text,
    picked = false,
    rounded = false,
    ...rest
}: Props) => {
    return (
        <ButtonStyled
            {...rest}
            picked={picked}
            rounded={rounded}
        >
            {text}
        </ButtonStyled>
    )
}

