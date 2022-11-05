import { Outlet, Navigate } from 'react-router-dom'
import { getAuth } from '../lib/auth'

const ProtectedRoute = ({ redirectPath = '/log-in' }) => {
	const token = getAuth()?.token

	if (!token) {
		return <Navigate to={redirectPath} replace />
	}

	return <Outlet />
}

export default ProtectedRoute
