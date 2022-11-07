import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(RouterLink)`
	font-size: 1.7rem;
	color: ${({ theme }) => theme.colors.primaryFontColor};
	text-decoration: none;
`

const ButtonLink = styled(StyledLink)`
	padding: 10px 25px;
	background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
	border-radius: 8px;
	transition: background-color 100ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryButtonBackgroundHover};
	}
`

const HoverFrameLink = styled(StyledLink)`
	padding: 10px 25px;
	border-radius: 8px;
	border: 1px solid transparent;
	transition: border 300ms ease;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primaryFontColor};
	}
`

type Props = {
	to: string
	variant: 'basic' | 'button' | 'hover-frame'
	text: string
}

const Link = ({ to, variant, text }: Props) => {
	switch (variant) {
		case 'basic':
			return <StyledLink to={to}>{text}</StyledLink>
		case 'button':
			return <ButtonLink to={to}>{text}</ButtonLink>
		case 'hover-frame':
			return <HoverFrameLink to={to}>{text}</HoverFrameLink>
	}
}

export default Link
