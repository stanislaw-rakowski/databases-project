import styled from 'styled-components'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'

const AnimalPage = () => {
	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Animals</h1>
			</AppContent>
		</AppWrapper>
	)
}

export default AnimalPage
