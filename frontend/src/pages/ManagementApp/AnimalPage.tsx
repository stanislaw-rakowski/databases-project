import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm, TopSection, SubHeading } from '../../components/common'
import { getAnimalById, deleteAnimalById } from '../../lib/api'
import { Animal } from '../../types'
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

const AnimalPage = () => {
	const { id } = useParams()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [animal, setAnimal] = React.useState<Animal | null>(null)
	const [showAnimalEditForm, setShowAnimalEditForm] = React.useState(false)

	React.useEffect(() => {
		const getAnimal = async () => {
			if (id && id !== 'all') {
				setAnimal(await getAnimalById(id))
			}
		}

		getAnimal()
	}, [pathname])

	const handleAnimalEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		// if (!shelter) return

		// await updateShelterById(shelter)

		// setShelter({
		// 	...shelter,
		// 	name: shelterName,
		// })
		// setShowShelterEditForm(false)
	}

	const handleAnimalDelete = async () => {
		if (!animal) return
		await deleteAnimalById(animal.id)
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
								<Button variant="primary" onClick={() => setShowAnimalEditForm((curr) => !curr)}>
									Edit
								</Button>
								<Button variant="destructive" onClick={handleAnimalDelete}>
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
				{showAnimalEditForm && (
					<StyledForm onSubmit={handleAnimalEdit}>
						{/* <InputField
										label="Name"
										type="text"
										placeholder="Enter shelter name"
										value={shelterName}
										onChange={setShelterName}
										required
									/> */}
						<Button variant="submit">Edit</Button>
					</StyledForm>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default AnimalPage
