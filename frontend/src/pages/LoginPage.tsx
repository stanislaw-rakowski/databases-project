import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'
import { setAuth } from '../lib/auth'
import { requestLogin } from '../lib/api'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()

		const response = await requestLogin({ email, password })

		setAuth(response)
		navigate('/app')
	}

	return (
		<Wrapper>
			<h1>Log in</h1>
			<FormIsland>
				<AuthForm ctaText="Log in" setEmail={setEmail} setPassword={setPassword} onSubmit={handleFormSubmit} />
			</FormIsland>
		</Wrapper>
	)
}

export default LoginPage
