import styled from 'styled-components'
import { Heading, StyledLink, LinksSection } from '../components/common'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 150px;
`

const Nav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem 3rem;
`

const Section = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const SubHeading = styled.p`
	font-size: 2rem;
`

const Image = styled.img`
	height: 50%;
`

const LandingPage = () => {
	return (
		<Wrapper>
			<Nav>
				<LinksSection>
					<li>
						<StyledLink to="/sign-up">Sign up</StyledLink>
					</li>
					<li>
						<StyledLink to="/log-in">Log in</StyledLink>
					</li>
				</LinksSection>
			</Nav>
			<Section>
				<Heading>Manage your animals like a pro</Heading>
				<SubHeading>sign up today for our all in one animal management platform</SubHeading>
			</Section>
			<Section>
				<Image src="src/assets/cat-and-dog.png" alt="" />
			</Section>
		</Wrapper>
	)
}

export default LandingPage
