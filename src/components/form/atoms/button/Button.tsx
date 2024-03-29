import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    hover?: boolean,
    picked?: boolean
    rounded?: boolean
}

type PropsStyled = Required<Pick<Props, 'picked' | 'rounded' | 'hover'>>

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
    border: 3px solid rgb(249, 187, 29);

    ${
        props => props.rounded && css`
            border-radius: 10px;
        `
    }

    ${
        props => props.picked && css`
            background-color: rgb(249, 187, 29);
        `
    }

    ${
        props => props.hover && css`
            &:hover {
                background-color: rgb(249, 187, 29);
            }
        `
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(249, 187, 29, 0.46);
        border-color: rgba(249, 187, 29, 0.46);
    }
`

export default ({
    text,
    hover = true,
    picked = false,
    rounded = false,
    ...rest
}: Props) => {
    return (
        <ButtonStyled
            {...rest}
            hover={hover}
            picked={picked}
            rounded={rounded}
        >
            {text}
        </ButtonStyled>
    )
}

