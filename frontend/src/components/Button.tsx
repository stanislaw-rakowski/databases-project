import styled from 'styled-components'

const BaseButton = styled.button`
	appearance: none;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
	color: ${({ theme }) => theme.colors.primaryFontColor};
	font-size: 1.2rem;
	cursor: pointer;
	transition: background-color 200ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryButtonBackgroundHover};
	}
`

const SubmitButton = styled(BaseButton)`
	width: 100%;
`

const HoverFrameButton = styled(BaseButton)`
	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primaryFontColor};
	}
`

type Props = {
	variant: 'base' | 'submit' | 'hover-frame'
	children: React.ReactNode
	onClick?: () => void
}

const Button = ({ children, onClick, variant }: Props) => {
	switch (variant) {
		case 'base':
			return <BaseButton onClick={onClick}>{children}</BaseButton>

		case 'submit':
			return (
				<SubmitButton onClick={onClick} type="submit">
					{children}
				</SubmitButton>
			)

		case 'hover-frame':
			return <HoverFrameButton onClick={onClick}>{children}</HoverFrameButton>
	}
}

export default Button
