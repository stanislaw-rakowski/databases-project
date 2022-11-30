import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
`

export const AppWrapper = styled(Wrapper)`
	width: 100%;
	display: flex;
`

export const Content = styled.main`
	height: calc(100% - 100px);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const AppContent = styled.main`
	height: 100%;
	width: calc(100% - 60px);
	padding: 2rem;
`

export const Heading = styled.h1`
	font-size: 7rem;
	font-weight: 800;
	margin: 2rem 0;
`

export const SubHeading = styled.h1`
	font-size: 3rem;
	font-weight: 800;
`

export const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: 8px;
`

export const FormIsland = styled.div`
	height: 400px;
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 4rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const TopSection = styled.div`
	min-height: 200px;
	border-bottom: 1px solid darkgray;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 1.5rem;
`

export const Results = styled.ol`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0;
	list-style: none;
`

export const Row = styled.li`
	width: 100%;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	padding: 14px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;

	a {
		color: inherit;
	}
`
