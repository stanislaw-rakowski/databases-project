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
	font-size: 5rem;
	font-weight: 800;
	margin: 2rem;
`

const Color = styled.span`
	color: ${({ theme }) => theme.colors.accentFontColor};
`

const SubHeading = styled.p`
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
			<LandingNav />
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
						src="https://thumbs.dreamstime.com/b/man-his-dog-beautiful-red-mountain-forest-landscape-man-his-dog-beautiful-red-mountain-forest-landscape-vector-144740090.jpg"
						alt=""
					/>
				</Section>
			</Content>
		</Wrapper>
	)
}

export default LandingPage
