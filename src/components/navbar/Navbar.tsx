import { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

// Components
import Logo from '../logo/Logo'
import Icon from '../icon/Icon'
import { LinkDefault, LinkButton, LinkType } from '../link/Link'

type MenuLink = {
    to: string,
    text: string,
    type: LinkType
}

export interface Props {
    links: MenuLink[]
}

const Navbar = styled.nav`
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    > div {
        background-color: var(--black);
        padding: 0 15px 0 10px;
        flex: 0 1 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > ul {
            display: none;
        } 
    }

    ul {
        list-style-type: none;
    }

    > ul {
        flex: 1 1 auto;
        background-color: var(--black);

        li {
            width: fit-content;
            margin-top: 30px;
            margin-left: auto;
            margin-right: auto;
        }

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
    }

    @media only screen and (min-width: 1250px) {
        > div > ul {
            display: flex;
            align-items: center;

            li:not(:last-child) {
                margin-right: 20px;
            }
        }

        > ul {
            display: none;
        }
    }
`

const Hamburger = styled.button`
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    color: var(--white);
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 1250px) {
        display: none;
    }
`

const MenuList = ({
    links
}: Props) => {
    return (
        <ul>
            {
                links.map((link, index) => {
                    const { type, ...rest } = link 
            
                    return (
                        <li
                            key={index}
                        >
                            {
                                type === LinkType.Default ?
                                (
                                    <LinkDefault
                                        color={'white'}
                                        { ...rest }
                                    />
                                ) :
                                (
                                    <LinkButton
                                        color={'white'}
                                        { ...rest }
                                    />
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ({
    links
}: Props) => {
    // State
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Navbar>
            <div>
                <Logo/>
                <Hamburger
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    <Icon
                        image={'icon-hamburger'}
                        height={20}
                        width={20}
                    />
                    Menu
                </Hamburger>
                <MenuList
                    links={links}
                />
            </div>
            <CSSTransition
                timeout={300}
                in={isOpen}
                classNames={'menu'}
                unmountOnExit={true}
            >
                <MenuList
                    links={links}
                />
            </CSSTransition>
        </Navbar>
    )
}