import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ManagementPage from './pages/ManagementPage'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<LandingPage />} />
				<Route path="/browse" element={<h1>browse animals</h1>} />
				<Route path="/sign-up" element={<SignupPage />} />
				<Route path="/log-in" element={<LoginPage />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/app" element={<ManagementPage />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
