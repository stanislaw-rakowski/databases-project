import * as React from 'react'

const App = () => {
	const [data, setData] = React.useState<any>(null)

	React.useEffect(() => {
		const getStatus = async () => {
			const res = await (await fetch(`${import.meta.env.VITE_SERVER_URL}status`)).json()
			setData(res)
		}

		getStatus()
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			<p>{JSON.stringify(data)}</p>
		</>
	)
}

export default App
