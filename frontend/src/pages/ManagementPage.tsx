import { useEffect } from 'react'
import styled from 'styled-components'
import { seedDatabase } from '../lib/api'
import { removeAuth } from '../lib/auth'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	padding: 2rem 150px;
`

const ManagementPage = () => {
	useEffect(() => {
		seedDatabase()
	}, [])

	const handleLogOut = () => {
		removeAuth()
		window.location.reload()
	}

	return (
		<Wrapper>
			<h1>Management App</h1>
			<button onClick={handleLogOut}>Log out</button>
		</Wrapper>
	)
}

export default ManagementPage
