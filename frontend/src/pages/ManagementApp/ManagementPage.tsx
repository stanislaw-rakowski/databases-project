import React from 'react'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { createShelter, deleteShelterById, getShelters, deleteShelters, updateShelterById } from '../../lib/api'
import { Shelter } from '../../types'

const ManagementPage = () => {
	const [showShelterCreationForm, setShowShelterCreationForm] = React.useState(false)
	const [editedShelterId, setEditedShelterId] = React.useState<string | null>(null)
	const [shelterName, setShelterName] = React.useState('')
	const [editedShelterName, setEditedShelterName] = React.useState('')
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

	const handleShelterEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (editedShelterId === null) {
			return
		}

		await updateShelterById(editedShelterId, editedShelterName)

		const updatedShelter = shelters.find((shelter) => shelter.shelterId === editedShelterId) as Shelter
		updatedShelter.name = editedShelterName
		const filteredShelters = shelters.filter((shelter) => shelter.shelterId !== editedShelterId)

		setShelters([...filteredShelters, updatedShelter])
		setEditedShelterId(null)
	}

	const handleAllSheltersDelete = async () => {
		await deleteShelters()
		setShelters([])
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
				{shelters.length > 0 && (
					<Button variant="destructive" onClick={handleAllSheltersDelete}>
						Delete shelters
					</Button>
				)}
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
						<Button
							variant="primary"
							onClick={() => {
								setEditedShelterName(name)
								setEditedShelterId(editedShelterId ? null : shelterId)
							}}
						>
							Edit
						</Button>
						{shelterId === editedShelterId && (
							<StyledForm onSubmit={handleShelterEdit}>
								<InputField
									label="Name"
									type="text"
									placeholder="Enter shelter name"
									value={editedShelterName}
									onChange={setEditedShelterName}
									required
								/>
								<Button variant="submit">Edit</Button>
							</StyledForm>
						)}
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
