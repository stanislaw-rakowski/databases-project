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
import ShelterPage from './pages/ManagementApp/ShelterPage'
import AnimalPage from './pages/ManagementApp/AnimalPage'
import EmployeePage from './pages/ManagementApp/Employee/EmployeePage'
import EmployeesPage from './pages/ManagementApp/Employee/EmployeesPage'
import AccountPage from './pages/ManagementApp/AccountPage'

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
					<Route path="/app/shelter/:id" element={<ShelterPage />} />
					<Route path="/app/animal/:id" element={<AnimalPage />} />
					<Route path="/app/employee/:id" element={<EmployeePage />} />
					<Route path="/app/employee/all" element={<EmployeesPage />} />
					<Route path="/app/account" element={<AccountPage />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
