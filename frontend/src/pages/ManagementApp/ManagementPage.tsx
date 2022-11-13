import styled from 'styled-components'
import { seedDatabase, deleteAccount } from '../../lib/api'
import { removeAuth } from '../../lib/auth'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'

const ManagementPage = () => {
	const handleLogOut = () => {
		removeAuth()
		window.location.reload()
	}

	const handleAccountDelete = () => {
		deleteAccount()
		handleLogOut()
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Management App</h1>
				<button onClick={handleLogOut}>Log out</button>
				<button onClick={seedDatabase}>Seed database</button>
				<button onClick={handleAccountDelete}>Delete account</button>
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
