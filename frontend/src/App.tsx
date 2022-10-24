import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import theme from './theme'
import GlobalStyles from './GlobalStyles'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

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
			</Routes>
		</ThemeProvider>
	)
}

export default App
