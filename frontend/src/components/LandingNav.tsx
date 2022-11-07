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

const LandingNav = () => {
	return (
		<Nav>
			<DogPaw />
			<LinksSection>
				<li>
					<Link to="/log-in" variant="hover-frame" text="Log in" />
				</li>
				<li>
					<Link to="/sign-up" variant="button" text="Sign up" />
				</li>
			</LinksSection>
		</Nav>
	)
}

export default LandingNav
