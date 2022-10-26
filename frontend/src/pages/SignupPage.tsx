import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'

const SignupPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()

		await (
			await fetch(`${import.meta.env.VITE_SERVER_URL}signup`, {
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
	}

	return (
		<Wrapper>
			<h1>Sign up</h1>
			<FormIsland>
				<AuthForm ctaText="Sign up" setEmail={setEmail} setPassword={setPassword} onSubmit={handleFormSubmit} />
			</FormIsland>
		</Wrapper>
	)
}

export default SignupPage
