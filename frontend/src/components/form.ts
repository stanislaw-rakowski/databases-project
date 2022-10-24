import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 150px;
`

export const FormIsland = styled.div`
	height: 400px;
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 4rem;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
`
