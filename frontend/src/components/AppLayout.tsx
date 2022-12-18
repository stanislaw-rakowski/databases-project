import { AppWrapper, AppContent } from './common'
import SideBarMenu from './SideBarMenu'

type Props = {
	children?: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>{children}</AppContent>
		</AppWrapper>
	)
}

export default AppLayout
