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
	const [shelterName, setShelterName] = React.useState('')
	const [shelter, setShelter] = React.useState<Shelter | null>(null)

	React.useEffect(() => {
		const getShelter = async () => {
			if (id) {
				setShelter(await getShelterById(id))
			}
		}

		getShelter()
	}, [])

	const handleShelterEdit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (shelter === null) {
			return
		}

		await updateShelterById(shelter.shelterId, shelterName)

		setShelter({
			...shelter,
			name: shelterName,
		})
		setShowShelterEditForm(false)
	}

	const handleShelterDelete = async (shelterId: string) => {
		await deleteShelterById(shelterId)
		setShelter(null)
		navigate('/app')
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Shelter</h1>
				{shelter && (
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
						<Button variant="destructive" onClick={() => handleShelterDelete(shelter.shelterId)}>
							Delete
						</Button>
					</div>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default ShelterPage
