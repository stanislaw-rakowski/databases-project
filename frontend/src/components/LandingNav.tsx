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

type Props = {
	primary: {
		to: string
		text: string
	}
	secondary: {
		to: string
		text: string
	}
}

const LandingNav = ({ primary, secondary }: Props) => {
	return (
		<Nav>
			<DogPaw />
			<LinksSection>
				<li>
					<Link to={secondary.to} variant="hover-frame" text={secondary.text} />
				</li>
				<li>
					<Link to={primary.to} variant="button" text={primary.text} />
				</li>
			</LinksSection>
		</Nav>
	)
}

export default LandingNav
