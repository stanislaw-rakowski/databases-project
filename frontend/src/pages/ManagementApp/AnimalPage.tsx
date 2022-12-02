import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AppWrapper, AppContent, StyledForm, TopSection, SubHeading } from '../../components/common'
import { getAnimalById, deleteAnimalById } from '../../lib/api'
import { Animal, AnimalForm, AnimalData } from '../../types'
import { updateAnimalById } from '../../lib/api'
import SideBarMenu from '../../components/SideBarMenu'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
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

const AnimalPage = () => {
	const { id } = useParams()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [animal, setAnimal] = React.useState<Animal | null>(null)
	const [showEditModal, setShowEditModal] = React.useState(false)
	const [showDeleteModal, setShowDeleteModal] = React.useState(false)
	const [animalFormData, setAnimalFormData] = React.useState<AnimalForm>({
		name: '',
		species: '',
		sex: '',
		birthDate: '',
		description: '',
	})

	React.useEffect(() => {
		const getAnimal = async () => {
			if (id && id !== 'all') {
				const data = await getAnimalById(id)
				setAnimal(data)
				setAnimalFormData({
					name: data.name,
					species: data.species,
					sex: data.sex,
					birthDate: data.birthDate,
					description: data.description,
				})
			}
		}

		getAnimal()
	}, [pathname])

	const handleInputValueChange = (key: keyof AnimalForm) => (value: AnimalForm[typeof key]) => {
		setAnimalFormData({ ...animalFormData, [key]: value })
	}

	const handleAnimalEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!id || !animal) return

		const editedAnimal = {
			name: animalFormData.name,
			birthDate: animalFormData.birthDate,
			sex: animalFormData.sex,
			species: animalFormData.species,
			description: animalFormData.description,
		} as AnimalData

		await updateAnimalById(id, editedAnimal)

		setAnimal({ ...animal, ...editedAnimal })
		setShowEditModal(false)
	}

	const handleAnimalDelete = async () => {
		if (!id) return

		await deleteAnimalById(id)

		setAnimal(null)
		navigate('/app')
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				{animal ? (
					<>
						<TopSection>
							<h2>Animal</h2>
							<SubHeading>{animal.name}</SubHeading>
							<ButtonsSection>
								<Button variant="primary" onClick={() => setShowEditModal((curr) => !curr)}>
									Edit
								</Button>
								<Button variant="destructive" onClick={() => setShowDeleteModal(true)}>
									Delete
								</Button>
							</ButtonsSection>
						</TopSection>
						<p>
							{animal.birthDate} - {animal.sex} - {animal.species} - {animal.description}
						</p>
					</>
				) : (
					<p>Go to shelter section and select an animal</p>
				)}
				{showDeleteModal && (
					<ActionModal
						text="Are you sure?"
						subText="This action will irreversibly delete this animal"
						acceptCta="Yes, delete"
						onAccept={handleAnimalDelete}
						cancelCta="No, go back"
						onClose={() => setShowDeleteModal(false)}
					/>
				)}
				{showEditModal && (
					<Modal title="Edit animal" onClose={() => setShowEditModal(false)}>
						<StyledForm onSubmit={handleAnimalEdit}>
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
							<Button variant="submit">Edit</Button>
						</StyledForm>
					</Modal>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default AnimalPage
