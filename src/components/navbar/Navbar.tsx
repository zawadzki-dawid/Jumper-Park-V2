import styled from 'styled-components'
import { useMemo, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// Assets
import LogoImage from '../../assets/logo/icon-logo-nav.png'

// Components
import Icon from '../icon/Icon'
import { Type, Link, Button } from '../link/Link'

type MenuLink = {
    path: string,
    text: string,
    type: Type
}

export interface Props {
    links: MenuLink[]
}

interface PropsMobile {
    headerHeight: number
}

const Header = styled.header`
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--black);

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px 0 15px;
        justify-content: space-between;
    }

    .nav__logo-wrapper {
        height: 55px;

        img {
            height: 100%;
        }
    }
`

const Hamburger = styled.button`
    display: flex;
    color: var(--white);
    align-items: center;
    flex-direction: column;

    div {
        height: 30px;
    }

    @media only screen and (min-width: 1000px) {
        display: none;
    }
`

const MenuMobile = styled.nav<PropsMobile>`
    top: 100%;
    width: 100%;
    z-index: 9999;
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
    z-index: 9999;

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

    const onLinkClick = () => {
        setIsOpen(false)
    }

    const menuLinks = useMemo(() => links.map((link, index) => (
        <li
            key={index}
            onClick={onLinkClick}
        >
        {
            link.type === Type.Link ? (
                <Link
                    to={link.path}
                    text={link.text}
                />
            ) : (
                <Button
                    to={link.path}
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
                <RouterLink
                    to={'/'}
                    className={'nav__logo-wrapper'}
                >
                    <img
                        alt={'Logo'}
                        src={LogoImage}
                    />
                </RouterLink>
                <Hamburger
                    type={'button'}
                    onClick={onHamburgerClick}
                >
                    <div>
                        <Icon
                            image={'hamburger'}
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