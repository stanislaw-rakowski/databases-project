import { FormEvent, useState } from 'react'
import { Wrapper, FormIsland, Form, Field, Input, SubmitButton } from '../components/form'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<Wrapper onSubmit={handleFormSubmit}>
			<h1>Log in</h1>
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

export default LoginPage
