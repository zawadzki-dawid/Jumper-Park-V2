import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

// Components
import Icon from '../icon/Icon'

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

export interface PropsDownload extends Omit<Props, 'path'> {
    filename: string
}

export interface PropsDocument extends Omit<Props, 'path'> {
    document: string
}

type LinkProps = Pick<Props, 'color'>

const BaseStyles = css<LinkProps>`
    font-size: var(--link-font-size);

    color: ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        color: var(--yellow-main);
    }
`

const IconStyles = css`
    display: grid;
    gap: 10px;
`

// Default link

const Default = styled(NavLink)<LinkProps>`
    ${BaseStyles}
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;
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

// Button link

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

const Button = styled(NavLink)`
    ${BaseStyles}
    padding: 10px 15px;
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;

    border: var(--border-width) solid ${ props => 
        props.color === 'white' ? 'var(--white)' : 'var(--black)'
    };

    &.active, &:hover {
        border-color: var(--yellow-main);
    }
`

// Download link

const Download = styled.a`
    ${BaseStyles}
    ${IconStyles}
    align-items: center;
    grid-template-rows: 45px;
    grid-template-columns: 45px auto;
`

export const LinkDownload = ({
    text,
    color,
    filename
}: PropsDownload) => {
    return (
        <Download
            color={color}
            href={filename}
            download={text}
        >
            <Icon
                image={'icon-download'}
            />
            { text }
        </Download>
    )
}

// Document link

const Document = styled.a`
    ${BaseStyles}
    ${IconStyles}
    text-align: center;
    justify-items: center;
    grid-template-rows: 45px auto;
`

export const LinkDocument = ({
    text,
    color,
    document
}: PropsDocument) => {
    return (
        <Document
            color={color}
            href={document}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <Icon
                image={'icon-document'}
            />
            { text }
        </Document>
    )
}