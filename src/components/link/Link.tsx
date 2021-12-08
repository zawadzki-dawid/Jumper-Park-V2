import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export enum Type {
    Link = 'Link',
    Button = 'Button',
    Fitted = 'Fitted'
}

type LinkColor = 'white' | 'black'
type HoverType =  'yellow' | 'orange' | 'default' | 'gradient'

export interface Props {
    to: string
    text: string
    color?: LinkColor
    hover?: HoverType
}

interface PropsBase {
    color: LinkColor
    hover: HoverType
}

const Base = css<PropsBase>`
    text-decoration: none;
    font-size: var(--link-font-size);
    font-weight: var(--link-font-weight);
    color: ${ props => props.color === 'white' ? 'var(--white)' : 'var(--black)' };

    // Default hover
    
    ${ 
        props => props.hover === 'default' && css`
            &:hover, &.active {
                color: var(--yellow-main);
            }
        `
    }

    ${
        props => props.hover === 'orange' && css`
            color: var(--grey);

            &:hover, &.active {
                color: var(--orange-light);
            }
        `
    }

`

// Link

const LinkStyled = styled(NavLink)`
    ${Base}
    white-space: nowrap;
    display: inline-block;
`

export const Link = ({
    to,
    text,
    color = 'white',
    hover = 'default',
}: Props) => {
    return (
        <LinkStyled
            to={to}
            color={color}
            hover={hover}
        >
            { text }
        </LinkStyled>
    )
}

// Button

const ButtonStyled = styled(NavLink)`
    ${Base}
    padding: 10px 15px;
    display: inline-block;
    border: var(--border-width) solid ${ props => props.color === 'white' ? 'var(--white)' : 'var(--black)' };

    &:hover, &.active {
        ${ props => props.hover === 'default' && 'border: var(--border-width) solid var(--yellow-main)' };
    }
`

export const Button = ({
    to,
    text,
    color = 'white',
    hover = 'default',
}: Props) => {
    return (
        <ButtonStyled
            to={to}
            color={color}
            hover={hover}
        >
            { text }    
        </ButtonStyled>
    )
}

// Fitted

const FittedStyled = styled(NavLink)`
    ${Base}
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    text-align: center;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    background-color: transparent;
`

export const Fitted = ({
    to,
    text,
    color = 'white',
    hover = 'default'
}: Props) => {
    return (
        <FittedStyled
            to={to}
            color={color}
            hover={hover}
        >
            { text }
        </FittedStyled>
    )
}

interface PropsLinkContent extends Props {
    children: ReactNode
}

const LinkContentStyled = styled(NavLink)`
    
`

export const LinkContent = ({
    to,
    children
}: PropsLinkContent) => {
    return (
        <LinkContentStyled
            to={to}
        >
            {children}
        </LinkContentStyled>
    )
}