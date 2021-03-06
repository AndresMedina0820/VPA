import { ContainetCustom } from "./LayoutStyles";
import { Sidebar } from '../utilities/Sidebar';
import React, { useState } from "react";
import { Navbar } from '../utilities/Navbar';

const modules = [
		{ name: 'Clientes', route: 'clientes'},
		{ name: 'Usuarios', route: 'usuarios'},
		{ name: 'Buses', route: 'buses'},
		{ name: 'Viajes', route: 'viajes'},
	];

export const Layout = ({ children }) => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	}

  return (
	<React.Fragment>
		<Navbar handleToggle={handleToggle} toggleMenu={toggleMenu}/>
		<Sidebar toggleMenu={toggleMenu} modules={modules}/>
		<ContainetCustom fluid toggle={toggleMenu}>
			{children}
		</ContainetCustom>
	</React.Fragment>
  )
}
