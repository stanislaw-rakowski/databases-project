import React from 'react'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm } from '../../components/common'
import Button from '../../components/Button'
import Link from '../../components/Link'
import InputField from '../../components/InputField'
import { createShelter, getShelters, deleteShelters } from '../../lib/api'
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

	const handleAllSheltersDelete = async () => {
		await deleteShelters()
		setShelters([])
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
						<Link to={`/app/shelter/${shelterId}`} variant="button" text="Details" />
					</div>
				))}
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
