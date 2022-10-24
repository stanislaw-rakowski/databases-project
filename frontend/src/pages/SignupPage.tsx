import { FormEvent, useState } from 'react'
import { Wrapper, Form, FormIsland, Field, Input, SubmitButton } from '../components/form'

const SignupPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<Wrapper onSubmit={handleFormSubmit}>
			<h1>Sign up</h1>
			<FormIsland>
				<Form>
					<Field>
						<label htmlFor="email">email</label>
						<Input
							type="email"
							name="email"
							placeholder="Enter email"
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
					</Field>
					<Field>
						<label htmlFor="password">password</label>
						<Input
							type="password"
							name="password"
							placeholder="Enter password"
							onChange={(event) => setPassword(event.target.value)}
							required
						/>
					</Field>
					<SubmitButton type="submit">Log in</SubmitButton>
				</Form>
			</FormIsland>
		</Wrapper>
	)
}

export default SignupPage
