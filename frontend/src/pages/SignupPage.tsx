import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Wrapper, FormIsland } from '../components/common'
import { requestSignup } from '../lib/api'
import InputField from '../components/InputField'
import Button from '../components/Button'

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: 8px;
`

const ErrorMessage = styled.span`
	font-size: small;
	color: red;
`

const SuccessMessage = styled.span`
	color: lightgreen;
`

const SignupPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState<string | null>(null)

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()
		try {
			await requestSignup({ email, password })
			setError(null)
			setSuccess(`You've been successfuly signed up`)
		} catch (error: any) {
			setError(error.data.message)
		}
	}

	return (
		<Wrapper>
			<h1>Sign up</h1>
			<FormIsland>
				<StyledForm onSubmit={handleFormSubmit}>
					<InputField label="email" type="email" placeholder="Enter email" onChange={setEmail} required />
					<InputField label="password" type="password" placeholder="Enter password" onChange={setPassword} required />
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<Button variant="submit">Sign up</Button>
				</StyledForm>
			</FormIsland>
			{success && <SuccessMessage>{success}</SuccessMessage>}
		</Wrapper>
	)
}

export default SignupPage
