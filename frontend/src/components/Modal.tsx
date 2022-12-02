import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

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
	width: 500px;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 3rem;
	border-radius: 8px;
`

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 6px;
	border: none;
	background-color: inherit;
	cursor: pointer;
	color: inherit;
	font-size: 1rem;
`

const Title = styled.p`
	margin-top: 0;
	font-size: 1.3rem;
	font-weight: 800;
	padding: 0.5rem 0;
	border-bottom: 1px solid darkgray;
`

type Props = {
	children: React.ReactNode
	onClose: () => void
	title: string
}

const Modal = ({ children, onClose, title }: Props) => {
	return (
		<Backdrop>
			<Content>
				<CloseButton onClick={onClose}>
					<ImCross />
				</CloseButton>
				<Title>{title}</Title>
				{children}
			</Content>
		</Backdrop>
	)
}

export default Modal
