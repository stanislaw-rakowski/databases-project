import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
