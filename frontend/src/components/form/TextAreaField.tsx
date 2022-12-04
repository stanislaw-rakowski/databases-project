import React from 'react'
import TextArea from './TextArea'
import Field from './Field'
import Label from './Label'

type Props = {
	label: string
	value: string
	placeholder?: string
	onChange: (value: string) => void
	required?: boolean
}

const TextAreaField = ({ label, value, placeholder, onChange, required = false }: Props) => {
	const id = React.useId()

	return (
		<Field>
			<Label htmlFor={id}>{label}</Label>
			<TextArea
				name={id}
				value={value}
				placeholder={placeholder}
				onChange={(event) => onChange(event.target.value)}
				required={required}
			/>
		</Field>
	)
}

export default TextAreaField
