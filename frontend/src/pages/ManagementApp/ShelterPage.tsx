import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import { getShelterById, deleteShelterById, updateShelterById } from '../../lib/api'
import { Shelter } from '../../types'
import Button from '../../components/Button'
import InputField from '../../components/InputField'

const ShelterPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [showShelterEditForm, setShowShelterEditForm] = React.useState(false)
	const [showAddAnimalForm, setShowAddAnimalForm] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelter, setShelter] = React.useState<Shelter | null>(null)
	const [animalName, setAnimalName] = React.useState('')
	const [animalBirthDate, setAnimalBirthDate] = React.useState('')
	const [animalSex, setAnimalSex] = React.useState('')
	const [animalSpecies, setAnimalSpecies] = React.useState('')
	const [animalDescription, setAnimalDescription] = React.useState('')

	React.useEffect(() => {
		const getShelter = async () => {
			if (id) {
				setShelter(await getShelterById(id))
			}
		}

		getShelter()
	}, [])

	if (shelter === null) {
		return null
	}

	const handleShelterEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		await updateShelterById(shelter)

		setShelter({
			...shelter,
			name: shelterName,
		})
		setShowShelterEditForm(false)
	}

	const handleShelterPublish = async () => {
		const updatedShelter: Shelter = {
			...shelter,
			published: shelter.published === 0 ? 1 : 0,
		}

		setShelter(updatedShelter)
		await updateShelterById(updatedShelter)
	}

	const handleShelterDelete = async () => {
		await deleteShelterById(shelter.shelterId)
		setShelter(null)
		navigate('/app')
	}

	const handleAnimalAdd = async () => {}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Shelter</h1>
				<div>
					<h2>{shelter.name}</h2>
					<Button
						variant="primary"
						onClick={() => {
							setShowShelterEditForm((curr) => !curr)
							setShelterName(shelter.name)
						}}
					>
						Edit
					</Button>
					{showShelterEditForm && (
						<StyledForm onSubmit={handleShelterEdit}>
							<InputField
								label="Name"
								type="text"
								placeholder="Enter shelter name"
								value={shelterName}
								onChange={setShelterName}
								required
							/>
							<Button variant="submit">Edit</Button>
						</StyledForm>
					)}
					<Button variant="destructive" onClick={handleShelterDelete}>
						Delete
					</Button>
					<Button variant="primary" onClick={handleShelterPublish}>
						{Boolean(shelter.published) ? 'Unpublish' : 'Publish'}
					</Button>
					<Button variant="primary" onClick={() => setShowAddAnimalForm((curr) => !curr)}>
						Add animal
					</Button>
					{showAddAnimalForm && (
						<StyledForm onSubmit={handleAnimalAdd}>
							<InputField
								label="Name"
								type="text"
								placeholder="Enter animal name"
								value={animalName}
								onChange={setAnimalName}
								required
							/>
							<InputField
								label="Birth date"
								type="text"
								placeholder="Enter birth date"
								value={animalBirthDate}
								onChange={setAnimalBirthDate}
								required
							/>
							<InputField
								label="Sex"
								type="text"
								placeholder="Enter animal sex"
								value={animalSex}
								onChange={setAnimalSex}
								required
							/>
							<InputField
								label="Species"
								type="text"
								placeholder="Enter animal species"
								value={animalSpecies}
								onChange={setAnimalSpecies}
								required
							/>
							<InputField
								label="Description"
								type="text"
								placeholder="Enter description"
								value={animalDescription}
								onChange={setAnimalDescription}
								required
							/>

							<Button variant="submit">Add</Button>
						</StyledForm>
					)}
				</div>
			</AppContent>
		</AppWrapper>
	)
}

export default ShelterPage
