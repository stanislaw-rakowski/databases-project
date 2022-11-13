import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BrowsePage from './pages/BrowsePage'
import ManagementPage from './pages/ManagementApp/ManagementPage'
import AccountPage from './pages/ManagementApp/AccountPage'
import AnimalsPage from './pages/ManagementApp/AnimalsPage'
import EmployeesPage from './pages/ManagementApp/EmployeesPage'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<LandingPage />} />
				<Route path="/browse" element={<BrowsePage />} />
				<Route path="/sign-up" element={<SignupPage />} />
				<Route path="/log-in" element={<LoginPage />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/app" element={<ManagementPage />} />
					<Route path="/app/account" element={<AccountPage />} />
					<Route path="/app/animals" element={<AnimalsPage />} />
					<Route path="/app/employees" element={<EmployeesPage />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
