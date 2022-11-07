import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, FormIsland } from '../components/common'
import { setAuth, getAuth } from '../lib/auth'
import { requestLogin } from '../lib/api'
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

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (getAuth()) {
			navigate('/app')
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
			<h1>Log in</h1>
			<FormIsland>
				<StyledForm onSubmit={handleFormSubmit}>
					<InputField label="email" type="email" placeholder="Enter email" onChange={setEmail} required />
					<InputField label="password" type="password" placeholder="Enter password" onChange={setPassword} required />
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<Button variant="submit">Log in</Button>
				</StyledForm>
			</FormIsland>
		</Wrapper>
	)
}

export default LoginPage
