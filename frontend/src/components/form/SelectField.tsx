import React from 'react'
import Field from './Field'
import Label from './Label'
import Select from './Select'

type Props<T extends string> = {
	label: string
	placeholder: string
	value: T
	options: T[]
	onChange: (value: string) => void
	required?: boolean
}

const SelectField = <T extends string>({
	label,
	placeholder,
	value,
	options,
	onChange,
	required = false,
}: Props<T>) => {
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
