import React from 'react'
import Field from './Field'
import Label from './Label'
import Select from './Select'

type Props = {
	label: string
	placeholder: string
	value: string
	options: string[]
	onChange: (value: string) => void
	required?: boolean
}

const SelectField = ({ label, placeholder, value, options, onChange, required = false }: Props) => {
	const id = React.useId()

	return (
		<Field>
			<Label htmlFor={id}>{label}</Label>
			<Select
				name={id}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				required={required}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Select>
		</Field>
	)
}

export default SelectField
