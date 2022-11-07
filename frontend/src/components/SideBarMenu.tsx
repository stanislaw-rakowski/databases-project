import { Link } from 'react-router-dom'
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

const MenuItem = styled(Link)`
	height: 60px;
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.secondaryFontColor};
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
	return (
		<Menu>
			<Logo />
			<li>
				<MenuItem to="/">
					<FaHome />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/">
					<FaUser />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/">
					<FaDog />
				</MenuItem>
			</li>
			<li>
				<MenuItem to="/">
					<FaIdBadge />
				</MenuItem>
			</li>
		</Menu>
	)
}

export default SideBarMenu
