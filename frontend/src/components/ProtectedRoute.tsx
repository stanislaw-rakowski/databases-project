import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const ProtectedRoute = ({ redirectPath = '/about' }) => {
	const cookies = new Cookies()
	const token = cookies.get('TOKEN')

	if (!token) {
		return <Navigate to={redirectPath} replace />
	}

	return <Outlet />
}

export default ProtectedRoute
