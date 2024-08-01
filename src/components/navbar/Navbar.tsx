import styled from 'styled-components'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// Assets
import LogoImage from '../../assets/logo/icon-logo-nav.png'

// Components
import Icon from '../icon/Icon'
import { Type, Link, Button } from '../link/Link'

export type MenuLink = {
	path: string
	text: string
	type: Type
}

export interface Props {
	links: MenuLink[]
}

interface PropsMobile {
	headerHeight: number
}

const Header = styled.header`
	top: 0;
	height: 100%;
	display: flex;
	position: sticky;
	align-items: center;
	z-index: 9999;
	background-color: var(--black);

	> div.temp {
		width: 100%;
		margin: auto;
		display: flex;
		max-width: 1280px;
		align-items: center;
		padding: 0 30px;
		justify-content: space-between;
	}

	.nav__logo-wrapper {
		height: 55px;

		img {
			height: 100%;
		}
	}

	@media only screen and (min-width: 1200px) {
		.nav__logo-wrapper {
			height: 80px;
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

	@media only screen and (min-width: 1200px) {
		display: none;
	}
`

const MenuMobile = styled.nav<PropsMobile>`
	top: 100%;
	width: 100%;
	z-index: 9999;
	position: absolute;
	background-color: var(--black);
	height: calc(100vh - ${(props) => `${props.headerHeight}px`});

	&.menu-enter,
	&.menu-exit-done {
		transform: translateX(100%);
	}

	&.menu-enter-active {
		transform: translateX(0);
		transition: transform 300ms;
	}

	&.menu-exit,
	&.menu-enter-done {
		transform: translateX(0);
	}

	&.menu-exit-active,
	&.menu-exit-done {
		transform: translateX(100%);
		transition: transform 300ms;
	}

	ul {
		li {
			display: flex;
			margin-top: 24px;
			justify-content: center;

			> a {
				font-size: 1.6rem;
			}
		}
	}

	@media only screen and (min-width: 1200px) {
		display: none;
	}
`

const MenuDesktop = styled.nav`
	display: none;
	z-index: 9999;

	ul {
		display: flex;
		align-items: center;

		li > a {
			font-size: 1.6rem;
		}

		li:not(:last-of-type) {
			margin-right: 20px;
		}
	}

	@media only screen and (min-width: 1200px) {
		display: block;
	}
`

const Translate = styled.div`
	width: min-content;
	place-self: end;

	.goog-te-gadget {
		color: #fff;
		font-family: inherit;
		font-weight: 400;
		font-size: 12px;

		.goog-te-combo {
			font-size: 14px;
			padding-left: 2px;
			height: 18px;
		}

		a {
			color: #fff;
			font-weight: 400;
			font-size: 12px;
		}

		& > div:first-child {
			background-color: #fff;
			border-radius: 2px;
			font-size: 14px;
		}
	}
`

const Top = styled.div`
	display: flex;

	@media only screen and (min-width: 1200px) {
		grid-template-rows: 46px auto;
		display: grid;
		row-gap: 10pxl;
		display: grid;
		row-gap: 8px;
		justify-items: end;
	}
`

const TopDesktop = styled.div`
	display: flex;
	gap: 30px;
	padding-right: 20px;

	& > a {
		display: none;
	}

	.goog-te-combo {
		width: 100%;
	}

	@media only screen and (min-width: 1200px) {
		padding-right: 0px;

		& > a {
			display: block;
		}
	}
`

export default ({ links }: Props) => {
	// State
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [headerHeight, setHeaderHeight] = useState<number>(0)

	// Ref
	const nodeRef = useRef<HTMLElement | null>(null)
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

	const menuLinks = useMemo(
		() =>
			links.map((link, index) => (
				<li key={index} onClick={onLinkClick}>
					{link.type === Type.Link ? (
						<Link to={link.path} text={link.text} />
					) : (
						<Button to={link.path} text={link.text} />
					)}
				</li>
			)),
		[links]
	)

	useEffect(() => {}, [])

	return (
		<Header ref={headerRef}>
			<div className={'temp'} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
				<RouterLink to={'/'} className={'nav__logo-wrapper'}>
					<img alt={'Logo'} src={LogoImage} />
				</RouterLink>
				<Top>
					<TopDesktop>
						<Translate id='google_translate_element'></Translate>
						<Button to={'/kupbilet'} text={'Kup bilet'} />
					</TopDesktop>
					<div style={{ height: 'fit-content' }}>
						<Hamburger type={'button'} onClick={onHamburgerClick}>
							<div>
								<Icon image={'hamburger'} />
							</div>
							Menu
						</Hamburger>
						<MenuDesktop>
							<ul>{menuLinks}</ul>
						</MenuDesktop>
					</div>
				</Top>
			</div>
			<CSSTransition in={isOpen} timeout={300} nodeRef={nodeRef} classNames={'menu'} unmountOnExit={true}>
				<MenuMobile ref={nodeRef} headerHeight={headerHeight}>
					<ul>
						{menuLinks}
						<li>
							<Button to={'/kupbilet'} text={'Kup bilet'} />
						</li>
					</ul>
				</MenuMobile>
			</CSSTransition>
		</Header>
	)
}
