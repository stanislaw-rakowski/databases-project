import styled from 'styled-components'
import { MdError } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

const StyledToast = styled.div<{ variant: 'success' | 'error' }>`
	height: 50px;
	padding: 10px 30px;
	border-radius: 8px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	background-color: ${({ variant, theme }) =>
		variant === 'success' ? theme.colors.successBackground : theme.colors.destructiveBackground};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	font-size: 20px;
	animation: drop 100ms forwards ease-out;

	@keyframes drop {
		0% {
			opacity: 0;
			top: -20px;
		}

		100% {
			opacity: 1;
			top: 70px;
		}
	}
`

const IconWrapper = styled.span`
	height: 100%;
	font-size: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`

type Props = {
	variant: 'success' | 'error'
	message: string
}

const Toast = ({ variant, message }: Props) => {
	return (
		<StyledToast variant={variant}>
			<IconWrapper>{variant === 'success' ? <TiTick /> : <MdError />}</IconWrapper>
			{message}
		</StyledToast>
	)
}

export default Toast
