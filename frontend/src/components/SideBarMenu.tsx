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
			<Logo />
			<li>
				<MenuItem to="/app" $isSelected={pathname === '/app'}>
					<FaHome />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/account" $isSelected={pathname === '/app/account'}>
					<FaUser />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/animals" $isSelected={pathname === '/app/animals'}>
					<FaDog />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/app/employees" $isSelected={pathname === '/app/employees'}>
					<FaIdBadge />
				</MenuItem>
			</li>
		</Menu>
	)
}

export default SideBarMenu
