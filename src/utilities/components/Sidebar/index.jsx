import React from 'react';
import { SideBar, SideBarHeader, ListModules } from './SidebarStyles';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Logo from '../../../static/images/logo.png';
import IconBuses from '../../../static/icons/icon-buses.svg';
import IconTravels from '../../../static/icons/icon-travels.svg';

export const Sidebar = ({toggleMenu, modules}) => {
  return (
    <SideBar toggle={toggleMenu}>
        <nav>
            <SideBarHeader className="sidebar-header">
                <Image fluid src={Logo}></Image>
            </SideBarHeader>
            <ul className="list-unstyled">
                {modules.map((mod) => (
                    <Link className="text-white" to={mod.route} key={mod.name}>
                        <ListModules>
                            {/* Changes for SASS with IconMoons */}
                            {
                                mod.name === 'Buses' ?
                                <Image src={IconBuses} style={{width: "1.2rem", margin: "0 .25rem"}}></Image> :
                                mod.name === 'Viajes' ?
                                <Image src={IconTravels} style={{width: "1.2rem", margin: "0 .35rem"}}></Image> :
                                <i className={`text-white ${mod.icon}`}></i>
                            }
                            {toggleMenu === true && <span>{mod.name}</span>}
                        </ListModules>
                    </Link>
                ))}
            </ul>
        </nav>
    </SideBar>
  )
}
