/* import styled, { css } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Route, Switch, useRouteMatch, useLocation, Redirect} from 'react-router-dom'

// Components
import { Fitted } from '../link/Link'

type Child<T extends Object> = (props: T) => JSX.Element

export type SectionInfo<T> = {
    name: string
    path: string
} & T

export interface Props<T> {
    Child: Child<T>
    location: string
    sections: SectionInfo<T>[]
}

interface MobileProps<T> {
    Child: Child<T>
    location: string
    section: SectionInfo<T>
}

interface StyledMobileProps {
    sectionHeight: number
}

// Mobile version

const StyledMobileLink = styled.div`
    padding: 25px;
`

const MobileLink = <T,>({
    name,
    path
}: Pick<SectionInfo<T>, 'name' | 'path'>) => {
    return (
        <StyledMobileLink>
            <Fitted
                text={name}
                color={'black'}
                to={path}
            />
        </StyledMobileLink>
    )
}

const StyledMobileSection = styled.div<StyledMobileProps>`
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
        padding: 20px;
        box-sizing: border-box;
        border-top: var(--border-width) solid var(--black);
    }
`

const MobileSection = <T,>({
    Child,
    section,
    location
}: MobileProps<T>) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [sectionHeight, setSectionHeight] = useState<number>(0)

    // Location
    const match = useRouteMatch(`/${location}/${section.path}`)

    // Ref
    const sectionRef = useRef<HTMLDivElement | null>(null)

    // Effect
    useEffect(() => {
        if (!sectionRef.current) {
            return
        }
        setSectionHeight(sectionRef.current.clientHeight)
        if (!match) {
            setIsOpen(false)
            return
        }
        setIsOpen(true)
    }, [match])

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames={'section'}
        >
            <StyledMobileSection
                sectionHeight={sectionHeight}
            >
                <div
                    ref={sectionRef}
                >
                    <Child
                        {...section}
                    />
                </div>
            </StyledMobileSection>
        </CSSTransition>
    )
}

const StyledMobile = styled.ul`
    > li {
        border: var(--border-width) solid var(--black);
        border-bottom: none;

        &:last-of-type {
            border-bottom: var(--border-width) solid var(--black);
        }
    }
    
    @media only screen and (min-width: 1000px) {
        display: none;
    }
`

const Mobile = <T,>({
    Child,
    sections,
    location
}: Props<T>) => {
    return (
        <StyledMobile>
        {
            sections.map((section, index) => {
                const { name, path } = section

                return (
                    <li
                        key={index}
                    >
                        <MobileLink
                            name={name}
                            path={path}
                        />
                        <MobileSection
                            Child={Child}
                            section={section}
                            location={location}
                        />
                    </li>
                )
            })
        }
        </StyledMobile>
    )
}

// Desktop version

interface DesktopLinkProps {
    active: boolean
    leftActive: boolean
    rightActive: boolean
}

const StyledDesktopLink = styled.li<DesktopLinkProps>`
    height: 80px;
    margin-top: 10px;
    box-sizing: border-box;
    border: var(--border-width) solid var(--black);

    &:not(:last-of-type) {
        border-right: none;
    }

    ${
        props => props.active && css`
            height: 90px;
            margin-top: 0px;
            border: var(--border-width) solid var(--black) !important;
            border-bottom: none !important;
        `
    }

    ${
        props => !props.active && css`
            &:hover {
                height: 90px;
                margin-top: 0px;
                border: var(--border-width) solid var(--black);

                & + li {
                    border-left: none;
                }
            }
        `
    }

    ${ props => props.leftActive && 'border-left: none !important' };
    ${ props => props.rightActive && 'border-right: none !important' };
`

const DesktopLink = <T,>({
    name,
    path
}: Pick<SectionInfo<T>, 'name' | 'path'>) => {
    // State
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isLeftActive, setIsLeftActive] = useState<boolean>(false)
    const [isRightActive, setIsRightActive] = useState<boolean>(false)

    // Location
    const currentLocation = useLocation()

    // Ref
    const elementRef = useRef<HTMLLIElement | null>(null)

    // Effect
    useEffect(() => {
        checkIfActive()
        checkIfSiblingActive()
    }, [currentLocation.pathname])

    // Method
    const checkIfActive = () => {
        if (!elementRef.current) {
            return
        }
        const linkRef = elementRef.current.firstChild as HTMLElement
        setIsActive(linkRef.classList.contains('active'))
    }

    const checkIfSiblingActive = () => {
        if (!elementRef.current) {
            return
        }
        const leftRef = (elementRef.current.previousSibling?.firstChild ?? null) as HTMLElement | null
        const rightRef = (elementRef.current.nextSibling?.firstChild ?? null) as HTMLElement | null

        if (!leftRef) {
            setIsLeftActive(false)
        } else {
            setIsLeftActive(leftRef.classList.contains('active'))
        }

        if (!rightRef) {
            setIsRightActive(false)
        } else {
            setIsRightActive(rightRef.classList.contains('active'))
        }
    }

    return (
        <StyledDesktopLink
            ref={elementRef}
            active={isActive}
            leftActive={isLeftActive}
            rightActive={isRightActive}
        >
            <Fitted
                text={name}
                color={'black'}
                to={path}
            />
        </StyledDesktopLink>
    )
}

const StyledDesktop = styled.div`
    display: none;

    > ul {
        display: grid;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
        grid-template-rows: auto;
    }

    > div {
        height: fit-content;
        border: var(--border-width) solid var(--black);
        border-top: none;
    }

    @media only screen and (min-width: 1000px) {
        display: block;
    }
`

const Desktop = <T,>({
    Child,
    sections,
    location
}: Props<T>) => {
    return (
        <StyledDesktop>
            <ul>
            {
                sections.map((section, index) => {
                    const { name, path } = section

                    return (
                        <DesktopLink
                            name={name}
                            path={path}
                            key={index}
                        />
                    )
                })
            }
            </ul>
            <div>
                <Switch>
                {
                    sections.map((section, index) => {
                        return (
                            <Route
                                key={index}
                                render={() => 
                                    <Child
                                        {...section}
                                    />
                                }
                            />
                        )
                    })
                }
                {                        
                    sections.length > 0 && (
                        <Redirect
                            to={`${location}/${sections[0].path}`}
                        />
                    )
                }
                </Switch>
            </div>
        </StyledDesktop>
    )
}

/* export default <T,>({
    Child,
    sections,
    location
}: Props<T>) => {
    return (
        <>
            <Mobile
                Child={Child}
                sections={sections}
                location={location}
            />
            <Desktop
                Child={Child}
                sections={sections}
                location={location}
            />
        </>
    )
}
*/

import styled from 'styled-components'

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

const MobileStyled = styled.ul`

`

const Mobile = <T,>({
    Child,
    sections
}: Props<T>) => {
    return (
        <MobileStyled>

        </MobileStyled>
    )
}

// Desktop component

const DesktopLinksStyled = styled.ul`

`

const DesktopLinks = <T,>({
    sections
}: Pick<Props<T>, 'sections'>) => {
    console.log(sections)
    return (
        <DesktopLinksStyled>
        {
            sections.map((section, index) =>
                <li
                    key={index}
                >
                    <Fitted
                        color={'black'}
                        to={section.path}
                        text={section.name}
                    />
                </li>
            )
        }
        </DesktopLinksStyled>
    )
}

const DesktopStyled = styled.div`

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