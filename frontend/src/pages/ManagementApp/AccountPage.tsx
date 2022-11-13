import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'
import { removeAuth } from '../../lib/auth'
import { deleteAccount } from '../../lib/api'
import Button from '../../components/Button'

const AccountPage = () => {
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
				<h1>Account</h1>
				<Button variant="frame" onClick={handleLogOut}>
					Log out
				</Button>
				<Button variant="destructive" onClick={handleAccountDelete}>
					Delete account
				</Button>
			</AppContent>
		</AppWrapper>
	)
}

export default AccountPage
