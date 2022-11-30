import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import {
	getShelters as fetchShelters,
	getShelterById,
	deleteShelterById,
	updateShelterById,
	createAnimal,
	getAnimals as fetchAnimals,
} from '../../lib/api'
import { Animal, AnimalRequest, Shelter } from '../../types'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import Link from '../../components/Link'

const ShelterPage = () => {
	const { id } = useParams()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [showShelterEditForm, setShowShelterEditForm] = React.useState(false)
	const [showAddAnimalForm, setShowAddAnimalForm] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelter, setShelter] = React.useState<Shelter | null>(null)
	const [shelters, setShelters] = React.useState<Shelter[] | null>(null)
	const [animalName, setAnimalName] = React.useState('')
	const [animalBirthDate, setAnimalBirthDate] = React.useState('')
	const [animalSex, setAnimalSex] = React.useState('')
	const [animalSpecies, setAnimalSpecies] = React.useState('')
	const [animalDescription, setAnimalDescription] = React.useState('')
	const [animals, setAnimals] = React.useState<Animal[] | null>(null)

	React.useEffect(() => {
		const getShelter = async () => {
			if (id && id !== 'all') {
				setShelter(await getShelterById(id))
			}
		}

		const getShelters = async () => {
			setShelters(await fetchShelters())
		}

		const getAnimals = async () => {
			if (id && id !== 'all') {
				setAnimals(await fetchAnimals(id))
			}
		}

		getShelter()
		getShelters()
		getAnimals()
	}, [pathname])

	const handleShelterEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!shelter) return

		await updateShelterById(shelter)

		setShelter({
			...shelter,
			name: shelterName,
		})
		setShowShelterEditForm(false)
	}

	const handleShelterPublish = async () => {
		if (!shelter) return

		const updatedShelter: Shelter = {
			...shelter,
			published: shelter.published === 0 ? 1 : 0,
		}

		setShelter(updatedShelter)
		await updateShelterById(updatedShelter)
	}

	const handleShelterDelete = async () => {
		if (!shelter) return

		await deleteShelterById(shelter.shelterId)
		setShelter(null)
		navigate('/app')
	}

	const handleAnimalAdd = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!id) return

		const addedAnimal = await createAnimal(id, {
			name: animalName,
			birthDate: animalBirthDate,
			sex: animalSex,
			species: animalSpecies,
			description: animalDescription,
		} as AnimalRequest)

		setAnimals(animals ? [...animals, addedAnimal] : [addedAnimal])
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				{shelter ? (
					<>
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
							<Button variant="secondary" onClick={handleShelterPublish}>
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
					</>
				) : shelters ? (
					shelters.map(({ shelterId, name }) => (
						<div key={shelterId}>
							{name}
							<Link to={`/app/shelter/${shelterId}`} variant="button" text="Details" />
						</div>
					))
				) : null}
				{animals
					? animals.map(({ id, name, birthDate, sex, species, description }) => (
							<div key={id}>
								{name} - {birthDate} - {sex} - {species} - {description}
								<Link to={`/app/animal/${id}`} variant="button" text="Details" />
							</div>
					  ))
					: null}
			</AppContent>
		</AppWrapper>
	)
}

export default ShelterPage
