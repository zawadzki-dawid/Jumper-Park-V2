import styled from 'styled-components'
import { useMemo, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import Logo from '../logo/Logo'
import Icon from '../icon/Icon'
import { LinkDefault, LinkButton, LinkType } from '../link/Link'

type MenuLink = {
    path: string,
    text: string,
    type: LinkType
}

export interface Props {
    links: MenuLink[]
}

interface PropsMobile {
    headerHeight: number
}

const Header = styled.header`
    height: 100%;
    position: relative;
    background-color: var(--black);

    > div {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px 0 15px;
        justify-content: space-between;
    }
`

const Hamburger = styled.button`
    display: flex;
    color: var(--white);
    align-items: center;
    flex-direction: column;

    div {
        width: 25px;
        height: 25px;
    }

    @media only screen and (min-width: 1000px) {
        display: none;
    }
`

const MenuMobile = styled.nav<PropsMobile>`
    width: 100%;
    position: absolute;
    background-color: var(--black);
    height: calc(100vh - ${ props => `${props.headerHeight}px` });

    &.menu-enter, &.menu-exit-done {
        transform: translateX(100%);
    }

    &.menu-enter-active {
        transform: translateX(0);
        transition: transform 300ms;
    }

    &.menu-exit, &.menu-enter-done {
        transform: translateX(0);
    }

    &.menu-exit-active, &.menu-exit-done {
        transform: translateX(100%);
        transition: transform 300ms;
    }

    ul {
        li {
            display: flex;
            margin-top: 30px;
            justify-content: center;
        }
    }

    @media only screen and (min-width: 1000px) {
        display: none;
    }
`

const MenuDesktop = styled.nav`
    display: none;

    ul {
        display: flex;
        align-items: center;

        li:not(:last-of-type) {
            margin-right: 20px;
        }
    }

    @media only screen and (min-width: 1000px) {
        display: block;
    }
`

export default ({
    links
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [headerHeight, setHeaderHeight] = useState<number>(0)

    // Ref
    const headerRef = useRef<HTMLElement | null>(null)

    // Method
    const onHamburgerClick = () => {
        if (!headerRef.current) {
            return
        }
        setHeaderHeight(headerRef.current.clientHeight)
        setIsOpen(!isOpen)
    }

    const menuLinks = useMemo(() => links.map((link, index) => (
        <li
            key={index}
        >
        {
            link.type === LinkType.Default ? (
                <LinkDefault
                    color={'white'}
                    path={link.path}
                    text={link.text}
                />
            ) : (
                <LinkButton
                    color={'white'}
                    path={link.path}
                    text={link.text}
                />
            )
        }
        </li>
    )), [links])

    return (
        <Header
            ref={headerRef}
        >
            <div>
                <Logo/>
                <Hamburger
                    onClick={onHamburgerClick}
                >
                    <div>
                        <Icon
                            image={'icon-hamburger'}
                        />
                    </div>
                    Menu
                </Hamburger>
                <MenuDesktop>
                    <ul>
                        { menuLinks }
                    </ul>
                </MenuDesktop>
            </div>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={'menu'}
                unmountOnExit={true}
            >
                <MenuMobile
                    headerHeight={headerHeight}
                >
                    <ul>
                        { menuLinks }
                    </ul>
                </MenuMobile>
            </CSSTransition>
        </Header>
    )
}