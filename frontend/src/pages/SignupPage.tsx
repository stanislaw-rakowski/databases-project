import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, Content, FormIsland, StyledForm } from '../components/common'
import { requestSignup } from '../lib/api'
import InputField from '../components/InputField'
import Button from '../components/Button'
import LandingNav from '../components/LandingNav'

const ErrorMessage = styled.span`
	font-size: small;
	color: red;
`

const SuccessMessage = styled.span`
	color: lightgreen;
`

const SignupPage = () => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [error, setError] = React.useState<string | null>(null)
	const [success, setSuccess] = React.useState<string | null>(null)
	const [params] = useSearchParams()

	React.useEffect(() => {
		const providedEmail = params.get('email')

		if (providedEmail) {
			setEmail(providedEmail)
		}
	}, [])

	const handleFormSubmit = async (event: React.FormEvent) => {
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
			<LandingNav
				primary={{ to: success ? `/log-in?email=${encodeURIComponent(email)}` : '/log-in', text: 'Log in' }}
				secondary={{ to: '/about', text: 'About' }}
			/>
			<Content>
				<h1>Sign up</h1>
				<FormIsland>
					<StyledForm onSubmit={handleFormSubmit}>
						<InputField
							label="email"
							type="email"
							value={email}
							placeholder="Enter email"
							onChange={setEmail}
							required
						/>
						<InputField
							label="password"
							type="password"
							value={password}
							placeholder="Enter password"
							onChange={setPassword}
							required
						/>
						{error && <ErrorMessage>{error}</ErrorMessage>}
						<Button variant="submit">Sign up</Button>
					</StyledForm>
				</FormIsland>
				{success && <SuccessMessage>{success}</SuccessMessage>}
			</Content>
		</Wrapper>
	)
}

export default SignupPage
