import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland } from '../components/form'
import AuthForm from '../components/AuthForm'

const SignupPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault()
		console.log({ email, password })
	}

	return (
		<Wrapper onSubmit={handleFormSubmit}>
			<h1>Sign up</h1>
			<FormIsland>
				<AuthForm setEmail={setEmail} setPassword={setPassword} onSubmit={handleFormSubmit} />
			</FormIsland>
		</Wrapper>
	)
}

export default SignupPage
