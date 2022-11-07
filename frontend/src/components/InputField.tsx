import { useId } from 'react'
import styled from 'styled-components'

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

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 4px 8px;
	border: 1px solid ${({ theme }) => theme.colors.secondaryFontColor};
	border-radius: 4px;
	background-color: inherit;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.primaryFontColor};

	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.accentFontColor};
	}
`

type Props = {
	label: string
	type: string
	placeholder: string
	onChange: (value: string) => void
	required: boolean
}

const InputField = ({ label, type, placeholder, onChange, required }: Props) => {
	const id = useId()

	return (
		<Field>
			<Label htmlFor={id}>{label}</Label>
			<Input
				type={type}
				name={id}
				placeholder={placeholder}
				onChange={(event) => onChange(event.target.value)}
				required={required}
			/>
		</Field>
	)
}

export default InputField
