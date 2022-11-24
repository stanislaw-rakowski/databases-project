import React from 'react'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { createShelter, deleteShelterById, getShelters } from '../../lib/api'
import { Shelter } from '../../types'

const ManagementPage = () => {
	const [showShelterCreationForm, setShowShelterCreationForm] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelters, setShelters] = React.useState<Shelter[]>([])

	React.useEffect(() => {
		const getUserShelters = async () => {
			setShelters(await getShelters())
		}

		getUserShelters()
	}, [])

	const handleShelterCreate = async (event: React.FormEvent) => {
		event.preventDefault()

		const response = await createShelter(shelterName)
		setShelters((current) => [...current, response])
		setShelterName('')
	}

	const handleShelterDelete = async (shelterId: string) => {
		await deleteShelterById(shelterId)
		setShelters((current) => current.filter((shelter) => shelter.shelterId !== shelterId))
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
				{shelters.map(({ shelterId, name }) => (
					<div key={shelterId}>
						{name}
						<Button variant="destructive" onClick={() => handleShelterDelete(shelterId)}>
							Delete
						</Button>
					</div>
				))}
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
