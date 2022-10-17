import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem;
`

const LandingPage = () => {
	const [data, setData] = React.useState<any>(null)

	React.useEffect(() => {
		const getStatus = async () => {
			const res = await (await fetch(`${import.meta.env.VITE_SERVER_URL}status`)).json()
			setData(res)
		}

		getStatus()
	}, [])

	return (
		<Wrapper>
			<h1>Landing Page</h1>
			<p>{JSON.stringify(data)}</p>
		</Wrapper>
	)
}

export default LandingPage
