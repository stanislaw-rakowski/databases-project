import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalStyles from './GlobalStyles'
import HomePage from './components/HomePage'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<HomePage />
		</ThemeProvider>
	)
}

export default App
