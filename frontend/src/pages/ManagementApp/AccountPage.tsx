import styled from 'styled-components'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'

const AccountPage = () => {
	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Account</h1>
			</AppContent>
		</AppWrapper>
	)
}

export default AccountPage
