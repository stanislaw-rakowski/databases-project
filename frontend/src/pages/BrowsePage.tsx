import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 150px;
`

const BrowsePage = () => {
	return (
		<Wrapper>
			<h1>browse animals</h1>
		</Wrapper>
	)
}

export default BrowsePage
