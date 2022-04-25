import { WrapperNav, NavbarCustom, SideBar, SideBarHeader, ContainetCustom, ListModules } from "../../styled-components/Layout.styles";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/user-default.jpg";
import IconBuses from "../../assets/icons/icon-buses.svg";
import IconTravels from "../../assets/icons/icon-travels.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

type Props = {
  children: JSX.Element;
};

const modules = [
		{ name: 'Clientes', icon: 'bi bi-people', route: 'clientes'},
		{ name: 'Usuarios', icon: 'bi bi-person', route: 'usuarios'},
		{ name: 'Buses', icon: '', route: 'buses'},
		{ name: 'Viajes', icon: '', route: 'viajes'},
	];

export const Layout = ({ children }: Props) => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	}

  return (
	<React.Fragment>
		<WrapperNav>
			<NavbarCustom bg="light" toggle={toggleMenu}>
				<Nav.Item onClick={handleToggle}>
					<i className="bi bi-list fs-2"></i>
				</Nav.Item>
				<Nav className="ms-auto align-items-center">
					<NavDropdown id="nav-dropdown-icon-help" title={<i className="bi bi-question-circle fs-5"></i>}>
						<NavDropdown.Item href="#action/3.1">Help!</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown id="nav-dropdown-icon-settings" title={<i className="bi bi-gear fs-5"></i>}>
						<NavDropdown.Item href="#action/3.1">Settings!</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown id="nav-dropdown-icon-notification" title={<i className="bi bi-bell fs-5"></i>}>
						<NavDropdown.Item href="#action/3.1">Notification!</NavDropdown.Item>
					</NavDropdown>
					<Nav.Item className="d-flex flex-column ms-4 me-2 text-end text-secondary">
						<span>Bienvenido,</span>
						<span className="fs-5 fw-bold">Demo User</span>
					</Nav.Item>
					<Nav.Item>
						<Image style={{width: "2.5rem"}} roundedCircle src={Profile}></Image>
					</Nav.Item>
				</Nav>
			</NavbarCustom>
		</WrapperNav>
		<SideBar toggle={toggleMenu}>
			<nav>
				<SideBarHeader className="sidebar-header">
					<Image fluid src={Logo}></Image>
				</SideBarHeader>
				<ul className="list-unstyled">
					{modules.map((modul) => (
						<Link className="text-white" to={modul.route}>
							<ListModules key={modul.name}>
								{/* Changes for SASS with IconMoons */}
								{
									modul.name === 'Buses' ? 
									<Image src={IconBuses} style={{width: "1.2rem", margin: "0 .25rem"}}></Image> :
									modul.name === 'Viajes' ?
									<Image src={IconTravels} style={{width: "1.2rem", margin: "0 .35rem"}}></Image> :
									<i className={`text-white ${modul.icon}`}></i>
								}
								{toggleMenu && <span>{modul.name}</span>}
							</ListModules>
						</Link>
					))}
				</ul>
			</nav>
		</SideBar>
		<ContainetCustom fluid toggle={toggleMenu}>
			{children}
		</ContainetCustom>
	</React.Fragment>
  )
}
