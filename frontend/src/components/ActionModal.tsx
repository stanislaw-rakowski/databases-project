import styled from 'styled-components'
import { FaExclamationCircle } from 'react-icons/fa'
import Button from './Button'

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.7);
`

const Content = styled.div`
	position: relative;
	max-width: 600px;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 3rem;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Icon = styled(FaExclamationCircle)`
	color: ${({ theme }) => theme.colors.accentFontColor};
	font-size: 4rem;
`

const Title = styled.p`
	margin: 0;
	font-size: 1.7rem;
	font-weight: 800;
	padding: 0.5rem 0;
`

const Text = styled.p`
	font-size: 1.3rem;
	margin-top: 10px;
`

const ButtonsSection = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`

type Props = {
	text: string
	subText: string
	acceptCta: string
	onAccept: () => void
	cancelCta: string
	onClose: () => void
}

const ActionModal = ({ text, subText, acceptCta, onAccept, cancelCta, onClose }: Props) => {
	return (
		<Backdrop>
			<Content>
				<Icon />
				<Title>{text}</Title>
				<Text>{subText}</Text>
				<ButtonsSection>
					<Button
						onClick={() => {
							onAccept()
							onClose()
						}}
						variant="primary"
					>
						{acceptCta}
					</Button>
					<Button onClick={onClose} variant="destructive">
						{cancelCta}
					</Button>
				</ButtonsSection>
			</Content>
		</Backdrop>
	)
}

export default ActionModal
