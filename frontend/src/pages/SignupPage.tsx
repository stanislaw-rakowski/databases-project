import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'
import { requestSignup } from '../lib/api'

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
				<AuthForm
					ctaText="Sign up"
					setEmail={setEmail}
					setPassword={setPassword}
					onSubmit={handleFormSubmit}
					error={error}
				/>
			</FormIsland>
			{success && <SuccessMessage>{success}</SuccessMessage>}
		</Wrapper>
	)
}

export default SignupPage
