import { useId } from 'react'
import styled from 'styled-components'
import Input from './Input'

const Field = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 4px;
`

const Label = styled.label`
	font-size: 1rem;
	margin-bottom: 5px;
`

type Props = {
	label: string
	type: string
	value: string
	placeholder: string
	onChange: (value: string) => void
	required: boolean
}

const InputField = ({ label, type, value, placeholder, onChange, required }: Props) => {
	const id = useId()

	return (
		<Field>
			<Label htmlFor={id}>{label}</Label>
			<Input
				type={type}
				name={id}
				value={value}
				placeholder={placeholder}
				onChange={(event) => onChange(event.target.value)}
				required={required}
			/>
		</Field>
	)
}

export default InputField
