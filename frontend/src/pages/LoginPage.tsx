import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault()
		console.log({ email, password })
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
