import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FaUser, FaDog, FaHome, FaIdBadge } from 'react-icons/fa'
import DogPaw from './icons/DogPaw'

const Menu = styled.menu`
	height: 100%;
	width: 60px;
	margin: 0;
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	background-color: ${({ theme }) => theme.colors.sideBarSurface};
	list-style: none;

	li:last-of-type {
		margin-top: auto;
	}
`

const MenuItem = styled(Link)<{ $isSelected: boolean }>`
	height: 60px;
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primaryFontColor : theme.colors.secondaryFontColor)};
	background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.sideBarSurfaceHover : 'inherit')};
	transition: color 150ms ease;
	transition: background-color 150ms ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primaryFontColor};
		background-color: ${({ theme }) => theme.colors.sideBarSurfaceHover};
	}
`

const Logo = styled(DogPaw)`
	transform: scale(0.8);
`

const SideBarMenu = () => {
	const { pathname } = useLocation()

	return (
		<Menu>
			<li>
				<Link to="/app">
					<Logo />
				</Link>
			</li>
			<li>
				<MenuItem to="/app/shelter" $isSelected={pathname.includes('shelter')}>
					<FaHome />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/animal" $isSelected={pathname.includes('animal')}>
					<FaDog />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/employee" $isSelected={pathname.includes('employee')}>
					<FaIdBadge />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/account" $isSelected={pathname.includes('account')}>
					<FaUser />
				</MenuItem>
			</li>
		</Menu>
	)
}

export default SideBarMenu
