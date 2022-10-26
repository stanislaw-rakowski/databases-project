import styled from 'styled-components'

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`

const Field = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 4px;
	margin: 1rem 0;
`

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 4px 8px;
	border: none;
	border-radius: 4px;
`

const SubmitButton = styled.button`
	width: 100%;
	appearance: none;
	border: none;
	border-radius: 4px;
	padding: 10px;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primaryButtonBackground};
	color: ${({ theme }) => theme.colors.primaryFontColor};
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`

type Props = {
	ctaText: string
	setEmail: (email: string) => void
	setPassword: (password: string) => void
	onSubmit: (event: React.FormEvent) => void
}

const AuthForm: React.FC<Props> = ({ ctaText, setEmail, setPassword, onSubmit }) => {
	return (
		<StyledForm onSubmit={(event) => onSubmit(event)}>
			<Field>
				<label htmlFor="email">email</label>
				<Input
					type="email"
					name="email"
					placeholder="Enter email"
					onChange={(event) => setEmail(event.target.value)}
					required
				/>
			</Field>
			<Field>
				<label htmlFor="password">password</label>
				<Input
					type="password"
					name="password"
					placeholder="Enter password"
					onChange={(event) => setPassword(event.target.value)}
					required
				/>
			</Field>
			<SubmitButton type="submit">{ctaText}</SubmitButton>
		</StyledForm>
	)
}

export default AuthForm
