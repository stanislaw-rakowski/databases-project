import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLock, FaLockOpen } from 'react-icons/fa'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent, StyledForm, TopSection, SubHeading, Results, Row } from '../../components/common'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import { createShelter, getShelters, deleteShelters } from '../../lib/api'
import { Shelter } from '../../types'

const ButtonsSection = styled.div`
	display: flex;
	justify-content: space-between;
`

const ResultRow = styled(Row)`
	span {
		flex: 1;
	}

	span:nth-of-type(2) {
		flex: 4;
	}
`

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
		if (shelters.length === 0) return

		await deleteShelters()
		setShelters([])
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<TopSection>
					<SubHeading>Manage your shelters</SubHeading>
					<ButtonsSection>
						<Button variant="primary" onClick={() => setShowShelterCreationForm(true)}>
							Create shelter
						</Button>
						<Button variant="destructive" onClick={handleAllSheltersDelete}>
							Delete shelters
						</Button>
					</ButtonsSection>
				</TopSection>
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
				<Results>
					{shelters.map(({ shelterId, name, published }, index) => (
						<ResultRow key={shelterId}>
							<span>{index + 1}</span>
							<span>{name}</span>
							<span>{published === 0 ? <FaLock /> : <FaLockOpen />}</span>
							<Link to={`/app/shelter/${shelterId}`}>Details</Link>
						</ResultRow>
					))}
				</Results>
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
