import styled from 'styled-components'
import SideBarMenu from '../../components/SideBarMenu'
import { AppWrapper, AppContent } from '../../components/common'

const EmployeePage = () => {
	return (
		<AppWrapper>
			<SideBarMenu />
			<AppContent>
				<h1>Employees</h1>
			</AppContent>
		</AppWrapper>
	)
}

export default EmployeePage
