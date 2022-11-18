import React from 'react'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { createShelter } from '../../lib/api'
import { Shelter } from '../../types'

const ManagementPage = () => {
	const [showShelterCreationForm, setShowShelterCreationForm] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelters, setShelters] = React.useState<Shelter[]>([])

	const handleShelterCreate = async (event: React.FormEvent) => {
		event.preventDefault()

		const response = await createShelter(shelterName)
		setShelters((current) => [...current, response])
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Management App</h1>
				<Button variant="primary" onClick={() => setShowShelterCreationForm(true)}>
					Create shelter
				</Button>
				{showShelterCreationForm && (
					<StyledForm onSubmit={handleShelterCreate}>
						<InputField
							label="Name"
							type="text"
							placeholder="Enter shelter name"
							value={shelterName}
							onChange={setShelterName}
							required
						/>
						<Button variant="submit">Create</Button>
					</StyledForm>
				)}
				{shelters.map((shelter) => (
					<div key={shelter.shelterId}>{shelter.name}</div>
				))}
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
