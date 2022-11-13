import styled from 'styled-components'

const BaseButton = styled.button`
	appearance: none;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.primaryFontColor};
	background-color: inherit;
	font-size: 1.2rem;
	cursor: pointer;
`

const PrimaryButton = styled(BaseButton)`
	background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
	transition: background-color 200ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryButtonBackgroundHover};
	}
`

const SecondaryButton = styled(BaseButton)`
	background-color: ${({ theme }) => theme.colors.secondaryButtonBackground};
	transition: background-color 200ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondaryButtonBackground};
	}
`

const DestructiveButton = styled(BaseButton)`
	background-color: ${({ theme }) => theme.colors.destructiveButtonBackground};
	transition: background-color 200ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.destructiveButtonBackgroundHover};
	}
`

const SubmitButton = styled(PrimaryButton)`
	width: 100%;
`

const FrameButton = styled(BaseButton)`
	border: 1px solid ${({ theme }) => theme.colors.primaryFontColor};
	transition: opacity 200ms ease;

	&:hover {
		opacity: 0.8;
	}
`

type Props = JSX.IntrinsicElements['button'] & {
	variant: 'base' | 'submit' | 'frame' | 'primary' | 'secondary' | 'destructive'
	children: React.ReactNode
	onClick?: () => void
}

const Button = ({ children, onClick, variant }: Props) => {
	switch (variant) {
		case 'base':
			return <BaseButton onClick={onClick}>{children}</BaseButton>
		case 'frame':
			return <FrameButton onClick={onClick}>{children}</FrameButton>
		case 'primary':
			return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
		case 'secondary':
			return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
		case 'destructive':
			return <DestructiveButton onClick={onClick}>{children}</DestructiveButton>
		case 'submit':
			return (
				<SubmitButton onClick={onClick} type="submit">
					{children}
				</SubmitButton>
			)
	}
}

export default Button
