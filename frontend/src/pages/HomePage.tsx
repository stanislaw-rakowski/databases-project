import styled from 'styled-components'
import { Heading, StyledLink, LinksSection } from '../components/common'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	background: linear-gradient(-45deg, #f0f2f0, #859398, #283048, #000c40);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite alternate;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

const HomePage = () => {
	return (
		<Wrapper>
			<Heading>
				Many animals. <br /> One app.
			</Heading>
			<nav>
				<LinksSection>
					<li>
						<StyledLink to="/browse">Browse animals</StyledLink>
					</li>
					<li>
						<StyledLink to="/about">Manager's app</StyledLink>
					</li>
				</LinksSection>
			</nav>
		</Wrapper>
	)
}

export default HomePage
