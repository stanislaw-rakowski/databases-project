import styled from 'styled-components'
import { seedDatabase } from '../lib/api'
import { removeAuth } from '../lib/auth'
import SideBarMenu from '../components/SideBarMenu'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`

const Content = styled.main`
	height: 100%;
	width: calc(100% - 60px);
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
`

const ManagementPage = () => {
	const handleLogOut = () => {
		removeAuth()
		window.location.reload()
	}

	return (
		<Wrapper>
			<SideBarMenu />
			<Content>
				<h1>Management App</h1>
				<button onClick={handleLogOut}>Log out</button>
				<button onClick={seedDatabase}>Seed database</button>
			</Content>
		</Wrapper>
	)
}

export default ManagementPage
