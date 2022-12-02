import React from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb'
import { FaDog, FaCat, FaQuestionCircle } from 'react-icons/fa'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm, TopSection, SubHeading, Results, Row } from '../../components/common'
import {
	getShelters as fetchShelters,
	getShelterById,
	deleteShelterById,
	updateShelterById,
	createAnimal,
	getAnimals as fetchAnimals,
	deleteAnimals,
} from '../../lib/api'
import { Animal, AnimalData, AnimalForm, Shelter } from '../../types'
import Button from '../../components/Button'
import InputField from '../../components/InputField'

const ButtonsSection = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		display: flex;
		gap: 1rem;
	}
`

const AnimalRow = styled(Row)`
	gap: 1rem;

	span {
		flex: 1;
	}
`

const ShelterRow = styled(Row)`
	span {
		flex: 1;
	}

	span:nth-of-type(2) {
		flex: 4;
	}
`

const ShelterPage = () => {
	const { id } = useParams()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [showShelterEditForm, setShowShelterEditForm] = React.useState(false)
	const [showAddAnimalForm, setShowAddAnimalForm] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelter, setShelter] = React.useState<Shelter | null>(null)
	const [shelters, setShelters] = React.useState<Shelter[] | null>(null)
	const [animalFormData, setAnimalFormData] = React.useState<AnimalForm>({
		name: '',
		species: '',
		sex: '',
		birthDate: '',
		description: '',
	})
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

	const handleInputValueChange = (key: keyof AnimalForm) => (value: AnimalForm[typeof key]) => {
		setAnimalFormData({ ...animalFormData, [key]: value })
	}

	const handleAnimalAdd = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!id) return

		const addedAnimal = await createAnimal(id, {
			name: animalFormData.name,
			birthDate: animalFormData.birthDate,
			sex: animalFormData.sex,
			species: animalFormData.species,
			description: animalFormData.description,
		} as AnimalData)

		setAnimals(animals ? [...animals, addedAnimal] : [addedAnimal])
		setAnimalFormData({
			name: '',
			species: '',
			sex: '',
			birthDate: '',
			description: '',
		})
	}

	const handleAllAnimalsDelete = async () => {
		if (id) {
			await deleteAnimals(id)
			setAnimals(null)
		}
	}

	const getIconBySpecies = (species: Animal['species']) => {
		switch (species) {
			case 'cat':
				return <FaCat />
			case 'dog':
				return <FaDog />
			case 'other':
				return <FaQuestionCircle />
		}
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				{shelter ? (
					<>
						<TopSection>
							<h2>Shelter</h2>
							<SubHeading>{shelter.name}</SubHeading>
							<ButtonsSection>
								<span>
									<Button variant="primary" onClick={() => setShowAddAnimalForm((curr) => !curr)}>
										Add animal
									</Button>
									<Button
										variant="primary"
										onClick={() => {
											setShowShelterEditForm((curr) => !curr)
											setShelterName(shelter.name)
										}}
									>
										Edit
									</Button>
									<Button variant="secondary" onClick={handleShelterPublish}>
										{Boolean(shelter.published) ? 'Unpublish' : 'Publish'}
									</Button>
								</span>
								<span>
									<Button variant="destructive" onClick={handleShelterDelete}>
										Delete
									</Button>
									<Button variant="destructive" onClick={handleAllAnimalsDelete}>
										Delete all animals
									</Button>
								</span>
							</ButtonsSection>
						</TopSection>
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
						{showAddAnimalForm && (
							<StyledForm onSubmit={handleAnimalAdd}>
								<InputField
									label="Name"
									type="text"
									placeholder="Enter animal name"
									value={animalFormData.name}
									onChange={handleInputValueChange('name')}
									required
								/>
								<InputField
									label="Birth date"
									type="text"
									placeholder="Enter birth date"
									value={animalFormData.birthDate}
									onChange={handleInputValueChange('birthDate')}
									required
								/>
								<InputField
									label="Sex"
									type="text"
									placeholder="Enter animal sex"
									value={animalFormData.sex}
									onChange={handleInputValueChange('sex')}
									required
								/>
								<InputField
									label="Species"
									type="text"
									placeholder="Enter animal species"
									value={animalFormData.species}
									onChange={handleInputValueChange('species')}
									required
								/>
								<InputField
									label="Description"
									type="text"
									placeholder="Enter description"
									value={animalFormData.description}
									onChange={handleInputValueChange('description')}
									required
								/>
								<Button variant="submit">Add</Button>
							</StyledForm>
						)}
						<Results>
							{animals ? (
								animals.map(({ id, name, birthDate, sex, species }, index) => (
									<AnimalRow key={id}>
										<span>{index + 1}</span>
										<span>{name}</span>
										<span>{birthDate.split('T')[0]}</span>
										<span>{sex === 'male' ? <TbGenderMale /> : <TbGenderFemale />}</span>
										<span>{getIconBySpecies(species)}</span>
										<Link to={`/app/animal/${id}`}>Details</Link>
									</AnimalRow>
								))
							) : (
								<p>You dont have any animals yet</p>
							)}
						</Results>
					</>
				) : shelters ? (
					<>
						<h1>Your shelters</h1>
						<Results>
							{shelters.map(({ shelterId, name }, index) => (
								<ShelterRow key={shelterId}>
									<span>{index + 1}</span>
									<span>{name}</span>
									<Link to={`/app/shelter/${shelterId}`}>Details</Link>
								</ShelterRow>
							))}
						</Results>
					</>
				) : (
					<p>Go to home page to create a shelter</p>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default ShelterPage
