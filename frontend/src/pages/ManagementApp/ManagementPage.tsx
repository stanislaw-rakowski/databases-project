import { useState } from 'react'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'
import Button from '../../components/Button'

const ManagementPage = () => {
	const [showShelterCreationForm, setShowShelterCreationForm] = useState(false)

	const handleShelterCreate = () => {
		setShowShelterCreationForm(true)
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Management App</h1>
				<Button variant="primary" onClick={handleShelterCreate}>
					Create shelter
				</Button>
				{showShelterCreationForm && <span>form</span>}
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
