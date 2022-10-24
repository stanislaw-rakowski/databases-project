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

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`

export const Field = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 4px;
	margin: 1rem 0;
`

export const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 4px 8px;
	border: none;
	border-radius: 4px;
`

export const SubmitButton = styled.button`
	width: 100%;
	appearance: none;
	border: none;
	border-radius: 4px;
	padding: 10px;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`
