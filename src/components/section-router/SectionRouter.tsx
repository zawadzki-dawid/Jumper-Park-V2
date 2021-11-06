import { useLocation } from 'react-router'
import styled, { css } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import { Fitted } from '../link/Link'

type PropsSection<T extends Object> = {
    name: string
    path: string
} & T

type Child<T extends Object> = (props: T) => JSX.Element

export interface Props<T extends Object> {
    Child: Child<T>
    sections: PropsSection<T>[]
}

// Mobile component

interface PropsMobileSection<T> {
    Child: Child<T>
    section: PropsSection<T>
}

// Mobile Link component

const MobileLinkStyled = styled.div`
    min-height: 80px;
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
        setIsOpen(location.pathname === section.path)
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

const MobileSectionStyled = styled.li`
    border: var(--border-width) solid var(--black);
    border-bottom: none;

    &:last-child {
        border-bottom: var(--border-width) solid var(--black);
    }
`

const MobileSection = <T,>({
    Child,
    section
}: PropsMobileSection<T>) => {
    return (
        <MobileSectionStyled>
            <MobileLink
                path={section.path}
                name={section.name}
            />
            <MobileChild
                Child={Child}
                section={section}
            />
        </MobileSectionStyled>
    )
}

// Mobile component

const MobileStyled = styled.ul`
    @media only screen and (min-width: 900px) {
        display: none;
    }
`

const Mobile = <T,>({
    Child,
    sections
}: Props<T>) => {
    return (
        <MobileStyled>
        {
            sections.map((section, index) =>
                <MobileSection
                    key={index}
                    Child={Child}
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
}

// Desktop Link component

const DesktopLinkStyled = styled.li<PropsDesktopLink>`
    display: flex;
    min-height: 80px;
    position: relative;
    justify-content: center;
    border: var(--border-width) solid var(--black);

    &:not(:first-of-type) {
        border-left: none;
    }

    ${
        props => props.active && css`
            border-bottom: none;

            &::before {
                top: -2px;
                width: 80%;
                content: '';
                display: block;
                position: absolute;
                height: var(--border-width);
                background-color: var(--orange-light);
            }
        `
    }

    &:hover::before {
        top: -2px;
        width: 80%;
        content: '';
        display: block;
        position: absolute;
        height: var(--border-width);
        background-color: var(--orange-light);
    }
`

const DesktopLink = <T,>({
    name,
    path
}: PropsSection<T>) => {
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
        return (childEl as HTMLElement).classList.contains('active')
    }

    return (
        <DesktopLinkStyled
            ref={elementRef}
            active={isActive}
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
    border: var(--border-width) solid var(--black);
    border-top: none;
`

const DesktopChild = <T,>({
    Child,
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
                        path={section.path}
                    />
                )  
            }
            {
                sections.length && <Redirect
                    to={sections[0].path}
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
    sections
}: Props<T>) => {
    return (
        <DesktopStyled>
            <DesktopLinks
                sections={sections}
            />
            <DesktopChild
                Child={Child}
                sections={sections}
            />
        </DesktopStyled>
    )
}

// Main component

export default <T,>({
    Child,
    sections
}: Props<T>) => {
    return (
        <>
            <Mobile
                Child={Child}
                sections={sections}
            />
            <Desktop
                Child={Child}
                sections={sections}
            />
        </>
    )
}