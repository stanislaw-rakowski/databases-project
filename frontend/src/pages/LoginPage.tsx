import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, Content, FormIsland, StyledForm } from '../components/common'
import { setAuth, getAuth } from '../lib/auth'
import { requestLogin } from '../lib/api'
import InputField from '../components/InputField'
import Button from '../components/Button'
import LandingNav from '../components/LandingNav'

const ErrorMessage = styled.span`
	font-size: small;
	color: red;
`

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()
	const [params] = useSearchParams()

	useEffect(() => {
		if (getAuth()) {
			navigate('/app')
		}

		const providedEmail = params.get('email')

		if (providedEmail) {
			setEmail(decodeURIComponent(providedEmail))
		}
	}, [])

	const handleFormSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		try {
			const response = await requestLogin({ email, password })

			setAuth(response)
			setError(null)
			navigate('/app')
		} catch (error: any) {
			setError(error.data.message)
		}
	}

	return (
		<Wrapper>
			<LandingNav primary={{ to: '/sign-up', text: 'Sign up' }} secondary={{ to: '/about', text: 'About' }} />
			<Content>
				<h1>Log in</h1>
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
						<Button variant="submit">Log in</Button>
					</StyledForm>
				</FormIsland>
			</Content>
		</Wrapper>
	)
}

export default LoginPage
