import { AppWrapper, AppContent } from '../../components/common'
import SideBarMenu from '../../components/SideBarMenu'

const ManagementPage = () => {
	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Welcome!</h1>
			</AppContent>
		</AppWrapper>
	)
}

export default ManagementPage
