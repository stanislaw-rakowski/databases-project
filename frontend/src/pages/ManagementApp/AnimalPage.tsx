import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import { getAnimalById, deleteAnimalById } from '../../lib/api'
import { Animal } from '../../types'
import Button from '../../components/Button'
import InputField from '../../components/InputField'

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
						<h1>Animal</h1>
						<div>
							<h2>{animal.name}</h2>
							<p>
								{animal.birthDate} - {animal.sex} - {animal.species} - {animal.description}
							</p>
							<Button variant="primary" onClick={() => setShowAnimalEditForm((curr) => !curr)}>
								Edit
							</Button>
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
							<Button variant="destructive" onClick={handleAnimalDelete}>
								Delete
							</Button>
						</div>
					</>
				) : (
					<p>Go to shelter section and select an animal</p>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default AnimalPage
