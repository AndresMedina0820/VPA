import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Profile from  '../../../static/images/user-default.jpg';
import { NavbarCustom, WrapperNav } from './NavbarStyles';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = ({handleToggle, toggleMenu}) => {
  return (
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
  )
}
