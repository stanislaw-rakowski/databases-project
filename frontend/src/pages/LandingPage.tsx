import styled from 'styled-components'
import LandingNav from '../components/LandingNav'

const Wrapper = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
`

const Content = styled.main`
	height: calc(100% - 100px);
	width: 100%;
	display: flex;
`

const Section = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Heading = styled.h1`
	width: 70%;
	font-size: 5rem;
	font-weight: 800;
	margin: 2rem;
`

const Color = styled.span`
	color: ${({ theme }) => theme.colors.accentFontColor};
`

const SubHeading = styled.p`
	width: 70%;
	font-size: 2rem;
	margin: 0 2rem;
`

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`

const LandingPage = () => {
	return (
		<Wrapper>
			<LandingNav primary={{ to: '/sign-up', text: 'Sign up' }} secondary={{ to: '/log-in', text: 'Log in' }} />
			<Content>
				<Section>
					<Heading>
						Manage your animals <br />
						<Color>like a pro</Color>
					</Heading>
					<SubHeading>sign up today for our all in one animal management platform</SubHeading>
				</Section>
				<Section>
					<Image
						src="https://www.creativefabrica.com/wp-content/uploads/2020/12/01/Horizontal-Background-Landscape-with-Dog-Graphics-6955276.jpg"
						alt=""
					/>
				</Section>
			</Content>
		</Wrapper>
	)
}

export default LandingPage
