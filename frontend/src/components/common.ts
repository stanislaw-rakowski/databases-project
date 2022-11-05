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

export const Heading = styled.h1`
	font-size: 7rem;
	font-weight: 800;
	margin: 2rem 0;
`

export const FormIsland = styled.div`
	height: 400px;
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 4rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
