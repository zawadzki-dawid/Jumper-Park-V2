import { useLocation } from 'react-router'
import styled, { css } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import { Fitted } from '../link/Link'

const ActiveStyle = css`
    left: 0; 
    right: 0;
    top: -2px;
    width: 70%;
    content: '';
    display: block;
    margin-left: auto; 
    margin-right: auto;
    position: absolute;
    height: var(--border-width);
    background-color: var(--orange-light);
`

type PropsSection<T extends Object> = {
    name: string
    path: string
} & T

type Child<T extends Object> = (props: T) => JSX.Element

export interface Props<T extends Object> {
    Child: Child<T>
    subpath: string
    sections: PropsSection<T>[]
}

// Mobile component

interface PropsMobileSection<T> {
    Child: Child<T>
    subpath: string
    section: PropsSection<T>
}

// Mobile Link component

const MobileLinkStyled = styled.div`
    height: 80px;
    background-color: var(--grey-light);
`

const MobileLink = <T,>({
    path,
    name
}: PropsSection<T>) => {
    return (
        <MobileLinkStyled>
            <Fitted
                to={path}
                text={name}
                color={'black'}
                hover={'orange'}
            />
        </MobileLinkStyled>
    )
}

// Mobile Child component

interface PropsMobileChild {
    sectionHeight: number
}

const MobileChildStyled = styled.div<PropsMobileChild>`
    max-height: 0px;
    overflow-y: hidden;

    &.section-enter, &.section-exit-done {
        max-height: 0px;
    }

    &.section-enter-active {
        max-height: ${ props => props.sectionHeight }px;
        transition: max-height 300ms ease;
    }

    &.section-enter-done {
        max-height: fit-content;
    }

    &.section-exit {
        max-height: ${ props => props.sectionHeight }px;
    }

    &.section-exit-active, &.section-exit-done {
        max-height: 0px;
        transition: max-height 300ms ease;
    }

    > div {
        box-sizing: border-box;
        border-top: var(--border-width) solid var(--black);
    }
`

const MobileChild = <T,>({
    Child,
    subpath,
    section
}: PropsMobileSection<T>) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [sectionHeight, setSectionHeight] = useState<number>(0)

    // Ref
    const childRef = useRef<HTMLDivElement | null>(null)

    // Location
    const location = useLocation()

    // Effect
    useEffect(() => {
        setSectionHeight((childRef.current as HTMLDivElement).clientHeight)
        setIsOpen(location.pathname === `${subpath}/${section.path}`)
    }, [location.pathname])

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={'section'}
        >
            <MobileChildStyled
                sectionHeight={sectionHeight}
            >
                <div
                    ref={childRef}
                >
                    <Child
                        {...section}
                    />
                </div>
            </MobileChildStyled>
        </CSSTransition>
    )
}

// Mobile Section component

interface PropsMobileLink {
    active: boolean
}

const MobileSectionStyled = styled.li<PropsMobileLink>`
    position: relative;
    border: var(--border-width) solid var(--grey);
    border-bottom: none;
    
    &:last-child {
        border-bottom: var(--border-width) solid var(--grey);
    }

    ${
        props => props.active && css`
            border: var(--border-width) solid var(--black);
            border-bottom: none;

            > div {
                background-color: var(--white);
            }

            &::before {
                ${ActiveStyle};
            }

            & + li {
                border-top: var(--border-width) solid var(--black);
            }

            &:last-child {
                border-bottom: var(--border-width) solid var(--black);
            }
        `
    }

    &:hover::before {
        ${ActiveStyle};
    }
`

const MobileSection = <T,>({
    Child,
    subpath,
    section
}: PropsMobileSection<T>) => {
    // State
    const [isActive, setIsActive] = useState<boolean>(false)

    // Location
    const location = useLocation()

    // Ref
    const elementRef = useRef<HTMLLIElement | null>(null)

    // Effect
    useEffect(() => {
        setIsActive(checkIfActive())
    }, [location.pathname])

    // Method
    const checkIfActive = (): boolean => {
        const childEl = (elementRef.current as HTMLLIElement).firstChild
        const linkEl = (childEl as HTMLDivElement).firstChild
        return (linkEl as HTMLElement).classList.contains('active')
    }

    return (
        <MobileSectionStyled
            ref={elementRef}
            active={isActive}
        >
            <MobileLink
                path={section.path}
                name={section.name}
            />
            <MobileChild
                Child={Child}
                subpath={subpath}
                section={section}
            />
        </MobileSectionStyled>
    )
}

// Mobile component

const MobileStyled = styled.ul`
    width: 100%;

    @media only screen and (min-width: 900px) {
        display: none;
    }
`

const Mobile = <T,>({
    Child,
    subpath,
    sections
}: Props<T>) => {
    return (
        <MobileStyled>
        {
            sections.map((section, index) =>
                <MobileSection
                    key={index}
                    Child={Child}
                    subpath={subpath}
                    section={section}
                />
            )
        }
        </MobileStyled>
    )
}

// Desktop component

interface PropsDesktopLink {
    active: boolean
    neighbourActive: boolean
}

// Desktop Link component

const DesktopLinkStyled = styled.li<PropsDesktopLink>`
    display: flex;
    min-height: 70px;
    position: relative;
    justify-content: center;
    border: 1px solid var(--grey);
    border-bottom-color: var(--black);
    background-color: var(--grey-light);
    border-bottom-width: var(--border-width);
    border-bottom: none;

    ${
        props => props.active && css`
            border-color: var(--black);
            background-color: var(--white);
            border-width: var(--border-width);

            &::before {
                ${ActiveStyle};
            }

            &::after {
                width: 100%;
                content: '';
                display: block;
                top: calc(100%);
                position: absolute;
                height: var(--border-width);
                background-color: var(--white);
            }
        `
    }

    ${
        props => !props.active && css`
            &:hover::before {
                ${ActiveStyle};
                top: -1px;
            }
        `
    }

    ${
        props => props.neighbourActive && css`
            border-right: none;
        `
    }

    ${
        props => !props.neighbourActive && css`
            & + li {
                border-left: none;
            }
        `
    }
`

const DesktopLink = <T,>({
    name,
    path
}: PropsSection<T>) => {
    // State
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isNeighbourActive, setIsNeighbourActive] = useState<boolean>(false)

    // Location
    const location = useLocation()

    // Ref
    const elementRef = useRef<HTMLLIElement | null>(null)

    // Effect
    useEffect(() => {
        setIsActive(checkIfActive())
        setIsNeighbourActive(checkIfNeighbourActive())
    }, [location.pathname])

    // Method
    const checkIfActive = (): boolean => {
        const childEl = (elementRef.current as HTMLLIElement).firstChild
        return (childEl as HTMLElement).classList.contains('active')
    }

    const checkIfNeighbourActive = (): boolean => {
        const neighbourEl = (elementRef.current as HTMLLIElement).nextElementSibling
        if (!neighbourEl) {
            return false
        }
        return (neighbourEl.firstChild as HTMLElement).classList.contains('active')
    }

    return (
        <DesktopLinkStyled
            ref={elementRef}
            active={isActive}
            neighbourActive={isNeighbourActive}
        >
            <Fitted
                to={path}
                text={name}
                color={'black'}
                hover={'orange'}
            />
        </DesktopLinkStyled>
    )
}

// Desktop Links component

const DesktopLinksStyled = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-bottom: var(--border-width) solid var(--black);
`

const DesktopLinks = <T,>({
    sections
}: Pick<Props<T>, 'sections'>) => {
    return (
        <DesktopLinksStyled>
        {
            sections.map((section, index) =>
                <DesktopLink
                    key={index}
                    {...section}
                />
            )
        }
        </DesktopLinksStyled>
    )
}

// Desktop Child component

const DesktopChildStyled = styled.div`
    box-sizing: border-box;
    border: var(--border-width) solid var(--black);
    border-top: none;
`

const DesktopChild = <T,>({
    Child,
    subpath,
    sections
}: Props<T>) => {
    return (
        <DesktopChildStyled>
            <Switch>
            {
                sections.map((section, index) =>
                    <Route
                        exact
                        key={index}
                        render={() =>
                            <Child
                                {...section}
                            />
                        }
                        path={`${subpath}/${section.path}`}
                    />
                )  
            }
            {
                sections.length && <Redirect
                    to={`${subpath}/${sections[0].path}`}
                />
            }
            </Switch>
        </DesktopChildStyled>
    )
}

// Desktop component

const DesktopStyled = styled.div`
    display: none;

    @media only screen and (min-width: 900px) {
        display: block;
    }
`

const Desktop = <T,>({
    Child,
    subpath,
    sections
}: Props<T>) => {
    return (
        <DesktopStyled>
            <DesktopLinks
                sections={sections}
            />
            <DesktopChild
                Child={Child}
                subpath={subpath}
                sections={sections}
            />
        </DesktopStyled>
    )
}

// Main component

export default <T,>({
    Child,
    subpath,
    sections
}: Props<T>) => {
    return (
        <>
            <Mobile
                Child={Child}
                subpath={subpath}
                sections={sections}
            />
            <Desktop
                Child={Child}
                subpath={subpath}
                sections={sections}
            />
        </>
    )
}