import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'
import { setAuth, getAuth } from '../lib/auth'
import { requestLogin } from '../lib/api'

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
				<AuthForm
					ctaText="Log in"
					setEmail={setEmail}
					setPassword={setPassword}
					onSubmit={handleFormSubmit}
					error={error}
				/>
			</FormIsland>
		</Wrapper>
	)
}

export default LoginPage
