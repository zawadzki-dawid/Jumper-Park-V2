import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type LinkColor = 'white' | 'black'

export enum LinkType {
    Default = 'DEFAULT',
    Button = 'BUTTON'
}

export interface Props {
    path: string,
    text: string,
    color: LinkColor
}

type LinkProps = Pick<Props, 'color'>

const Default = styled(NavLink)<LinkProps>`
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;
    color: ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        color: var(--yellow-main);
    }
`

const Button = styled(NavLink)`
    padding: 10px 15px;
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;

    border: var(--border-width) solid ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    color: ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        color: var(--yellow-main);
    }

    &.active, &:hover {
        border-color: var(--yellow-main);
    }
`

export const LinkDefault = ({
    path,
    text,
    color
}: Props) => {
    return (
        <Default
            to={path}
            color={color}
        >
            { text }
        </Default>
    )
}

export const LinkButton = ({
    path,
    text,
    color
}: Props) => {
    return (
        <Button
            to={path}
            color={color}
        >
            { text }
        </Button>
    )
}