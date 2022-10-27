import { useEffect } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 150px;
`

const ManagementPage = () => {
	const cookies = new Cookies()
	const token = cookies.get('TOKEN')

	useEffect(() => {
		const get = async () => {
			await (
				await fetch(`${import.meta.env.VITE_SERVER_URL}seed`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				})
			).json()
		}
		get()
	}, [])

	return (
		<Wrapper>
			<h1>Management App</h1>
		</Wrapper>
	)
}

export default ManagementPage
