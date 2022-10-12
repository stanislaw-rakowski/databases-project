import * as React from 'react'

const App = () => {
	React.useEffect(() => {
		const getStatus = async () => await fetch(`${import.meta.env.VITE_SERVER_URL}status`)

		getStatus()
	}, [])

	return <h1>Hello World!</h1>
}

export default App
