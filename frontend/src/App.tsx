import * as React from 'react'

const App = () => {
	React.useEffect(() => {
		const getStatus = async () => await fetch('http://localhost:5000/status')

		getStatus()
	}, [])

	return <h1>Hello World!</h1>
}

export default App
