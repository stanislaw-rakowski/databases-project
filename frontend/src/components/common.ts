import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const StyledLink = styled(Link)`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primaryFontColor};
`

export const LinksSection = styled.ul`
	display: flex;
	gap: 4rem;
	list-style: none;
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
