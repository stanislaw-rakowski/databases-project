import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const cookies = new Cookies()

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()

		const res = await (
			await fetch(`${import.meta.env.VITE_SERVER_URL}login`, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		).json()

		cookies.set('TOKEN', res.token, {
			path: '/',
		})

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
