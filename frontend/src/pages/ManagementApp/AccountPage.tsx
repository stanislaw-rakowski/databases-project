import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppWrapper, AppContent } from '../../components/common'
import { removeAuth } from '../../lib/auth'
import { deleteAccount, seedAccountDatabase } from '../../lib/api'
import SideBarMenu from '../../components/SideBarMenu'
import Button from '../../components/Button'
import ActionModal from '../../components/ActionModal'

const AccountPage = () => {
	const [showDeleteAccountModal, setShowDeleteAccountModal] = React.useState(false)
	const navigate = useNavigate()

	const handleLogOut = () => {
		removeAuth()
		navigate('/log-in')
	}

	const handleAccountDelete = async () => {
		try {
			await deleteAccount()
			removeAuth()
			navigate('/about')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Account</h1>
				<Button variant="frame" onClick={handleLogOut}>
					Log out
				</Button>
				<Button variant="secondary" onClick={seedAccountDatabase}>
					Seed database
				</Button>
				<Button variant="destructive" onClick={() => setShowDeleteAccountModal(true)}>
					Delete account
				</Button>
				{showDeleteAccountModal && (
					<ActionModal
						text="Are you sure?"
						subText="This action will irreversibly delete your account with all of your shelters, employees and animals"
						acceptCta="Yes, delete"
						onAccept={handleAccountDelete}
						cancelCta="No, go back"
						onClose={() => setShowDeleteAccountModal(false)}
					/>
				)}
			</AppContent>
		</AppWrapper>
	)
}

export default AccountPage
