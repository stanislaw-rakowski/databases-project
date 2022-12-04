import styled from 'styled-components'

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 4px 8px;
	border: 1px solid ${({ theme }) => theme.colors.secondaryFontColor};
	border-radius: 4px;
	background-color: inherit;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.primaryFontColor};
	font-family: inherit;

	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.accentFontColor};
	}
`

export default Input
