import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland } from '../components/form'
import AuthForm from '../components/AuthForm'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault()
		console.log({ email, password })
	}

	return (
		<Wrapper onSubmit={handleFormSubmit}>
			<h1>Log in</h1>
			<FormIsland>
				<AuthForm setEmail={setEmail} setPassword={setPassword} onSubmit={handleFormSubmit} />
			</FormIsland>
		</Wrapper>
	)
}

export default LoginPage
