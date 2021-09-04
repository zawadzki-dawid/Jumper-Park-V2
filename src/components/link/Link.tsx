import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type LinkColor = 'white' | 'black'

export enum LinkType {
    Default = 'DEFAULT',
    Button = 'BUTTON'
}

export interface Props {
    to: string,
    text: string,
    color: LinkColor
}

type PropsStyle = Pick<Props, 'color'>

const Default = styled(NavLink)<PropsStyle>`
    display: block;
    white-space: nowrap;
    text-decoration: none;
    color: ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        color: var(--yellow-main);
    }
`

const Button = styled(Default)`
    padding: 10px 10px;
    border: var(--border-width) solid ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        border-color: var(--yellow-main);
    }
`

export const LinkDefault = ({
    to,
    text,
    color
}: Props) => {
    return (
        <Default
            to={to}
            color={color}
        >
            { text }
        </Default>
    )
}

export const LinkButton = ({
    to,
    text,
    color
}: Props) => {
    return (
        <Button
            to={to}
            color={color}
        >
            { text }
        </Button>
    )
}