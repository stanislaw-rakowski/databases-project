import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import DogPaw from './icons'
import Link from './Link'

const Nav = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem;
	border-bottom: 1px solid darkgray;
`

const LinksSection = styled.ul`
	display: flex;
	gap: 4rem;
	list-style: none;
`

const routes = {
	about: {
		to: '/about',
		text: 'About',
	},
	signup: {
		to: '/sign-up',
		text: 'Sign up',
	},
	login: {
		to: '/log-in',
		text: 'Log in',
	},
}

const locationLinks = {
	'/about': {
		primary: routes.signup,
		secondary: routes.login,
	},
	'/log-in': {
		primary: routes.signup,
		secondary: routes.about,
	},
	'/sign-up': {
		primary: routes.login,
		secondary: routes.about,
	},
}

const LandingNav = () => {
	const { pathname } = useLocation()
	const currentLinks = locationLinks[pathname as keyof typeof locationLinks]

	return (
		<Nav>
			<DogPaw />
			<LinksSection>
				<li>
					<Link to={currentLinks.secondary.to} variant="hover-frame" text={currentLinks.secondary.text} />
				</li>
				<li>
					<Link to={currentLinks.primary.to} variant="button" text={currentLinks.primary.text} />
				</li>
			</LinksSection>
		</Nav>
	)
}

export default LandingNav
