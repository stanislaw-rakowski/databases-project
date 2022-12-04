import React from 'react'
import Input from './Input'
import Field from './Field'
import Label from './Label'

type Props = {
	label: string
	type: string
	value: string
	placeholder?: string
	onChange: (value: string) => void
	required?: boolean
}

const InputField = ({ label, type, value, placeholder, onChange, required = false }: Props) => {
	const id = React.useId()

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
