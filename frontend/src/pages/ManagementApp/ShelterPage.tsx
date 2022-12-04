import React from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
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
import { AppWrapper, AppContent, StyledForm, TopSection, SubHeading, Results, Row } from '../../components/common'
import { SpeciesIcon, GenderIcon } from '../../components/icons'
import SideBarMenu from '../../components/SideBarMenu'
import Button from '../../components/Button'
import InputField from '../../components/form/InputField'
import TextAreaField from '../../components/form/TextAreaField'
import SelectField from '../../components/form/SelectField'
import Modal from '../../components/Modal'
import ActionModal from '../../components/ActionModal'

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
	const [showShelterEditModal, setShowShelterEditModal] = React.useState(false)
	const [showAddAnimalModal, setShowAddAnimalModal] = React.useState(false)
	const [showDeleteShelterModal, setShowDeleteShelterModal] = React.useState(false)
	const [showDeleteAnimalsModal, setShowDeleteAnimalsModal] = React.useState(false)
	const [showPublishShelterModal, setShowPublishShelterModal] = React.useState(false)
	const [shelterName, setShelterName] = React.useState('')
	const [shelter, setShelter] = React.useState<Shelter | null>(null)
	const [shelters, setShelters] = React.useState<Shelter[] | null>(null)
	const [animalFormData, setAnimalFormData] = React.useState<AnimalForm>({
		name: '',
		species: 'dog',
		gender: 'male',
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
				const data = await fetchAnimals(id)
				setAnimals(data.length !== 0 ? data : null)
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
		setShowShelterEditModal(false)
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
			gender: animalFormData.gender,
			species: animalFormData.species,
			description: animalFormData.description,
		} as AnimalData)

		setAnimals(animals ? [...animals, addedAnimal] : [addedAnimal])
		setAnimalFormData({
			name: '',
			species: '',
			gender: '',
			birthDate: '',
			description: '',
		})
		setShowAddAnimalModal(false)
	}

	const handleAllAnimalsDelete = async () => {
		if (id) {
			await deleteAnimals(id)
			setAnimals(null)
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
									<Button variant="primary" onClick={() => setShowAddAnimalModal((curr) => !curr)}>
										Add animal
									</Button>
									<Button
										variant="primary"
										onClick={() => {
											setShowShelterEditModal((curr) => !curr)
											setShelterName(shelter.name)
										}}
									>
										Edit
									</Button>
									<Button variant="secondary" onClick={() => setShowPublishShelterModal(true)}>
										{Boolean(shelter.published) ? 'Unpublish' : 'Publish'}
									</Button>
								</span>
								<span>
									<Button variant="destructive" onClick={() => setShowDeleteShelterModal(true)}>
										Delete
									</Button>
									<Button variant="destructive" onClick={() => setShowDeleteAnimalsModal(true)}>
										Delete all animals
									</Button>
								</span>
							</ButtonsSection>
						</TopSection>
						{showPublishShelterModal && (
							<ActionModal
								text="Are you sure?"
								subText={`This action will ${Boolean(shelter.published) ? 'unpublish' : 'publish'} your shelter and ${
									Boolean(shelter.published) ? 'hide it from' : "make it visible with all it's animals on"
								} our public page`}
								acceptCta={`Yes, ${Boolean(shelter.published) ? 'unpublish' : 'publish'}`}
								onAccept={handleShelterPublish}
								cancelCta="No, go back"
								onClose={() => setShowPublishShelterModal(false)}
							/>
						)}
						{showDeleteShelterModal && (
							<ActionModal
								text="Are you sure?"
								subText="This action will irreversibly delete your shelter"
								acceptCta="Yes, delete"
								onAccept={handleShelterDelete}
								cancelCta="No, go back"
								onClose={() => setShowDeleteShelterModal(false)}
							/>
						)}
						{showDeleteAnimalsModal && (
							<ActionModal
								text="Are you sure?"
								subText="This action will irreversibly delete all your animals in this shelter"
								acceptCta="Yes, delete"
								onAccept={handleAllAnimalsDelete}
								cancelCta="No, go back"
								onClose={() => setShowDeleteAnimalsModal(false)}
							/>
						)}
						{showShelterEditModal && (
							<Modal title="Edit shelter" onClose={() => setShowShelterEditModal(false)}>
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
							</Modal>
						)}
						{showAddAnimalModal && (
							<Modal title="Add animal" onClose={() => setShowAddAnimalModal(false)}>
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
										type="date"
										placeholder="Enter birth date"
										value={animalFormData.birthDate}
										onChange={handleInputValueChange('birthDate')}
										required
									/>
									<SelectField
										label="Gender"
										placeholder="Enter animal gender"
										value={animalFormData.gender}
										options={['male', 'female']}
										onChange={handleInputValueChange('gender')}
										required
									/>
									<SelectField
										label="Species"
										placeholder="Enter animal species"
										value={animalFormData.species}
										options={['dog', 'cat', 'other']}
										onChange={handleInputValueChange('species')}
										required
									/>
									<TextAreaField
										label="Description"
										placeholder="Enter description"
										value={animalFormData.description}
										onChange={handleInputValueChange('description')}
										required
									/>
									<Button variant="submit">Add</Button>
								</StyledForm>
							</Modal>
						)}
						<Results>
							{animals ? (
								animals.map(({ id, name, birthDate, gender, species }, index) => (
									<AnimalRow key={id}>
										<span>{index + 1}</span>
										<span>{name}</span>
										<span>{birthDate.split('T')[0]}</span>
										<span>
											<GenderIcon gender={gender} />
										</span>
										<span>
											<SpeciesIcon species={species} />
										</span>
										<Link to={`/app/animal/${id}`}>Details</Link>
									</AnimalRow>
								))
							) : (
								<p>{`You don't have any animals yet. Go to shelter page and add them!`}</p>
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
