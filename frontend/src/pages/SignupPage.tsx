import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland } from '../components/common'
import AuthForm from '../components/AuthForm'
import { requestSignup } from '../lib/api'

const SignupPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()

		requestSignup({ email, password })
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
