import { SideBar, SideBarHeader, ListModules } from './SidebarStyles';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Logo from '../../static/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGroup, faBus, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

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
								mod.name === 'Clientes' ?
									<FontAwesomeIcon icon={faUser}/> :
                                mod.name === 'Usuarios' ?
									<FontAwesomeIcon icon={faUserGroup}/> :
                                mod.name === 'Buses' ?
                                	<FontAwesomeIcon icon={faBus}/> :
                                mod.name === 'Viajes' ?
									<FontAwesomeIcon icon={faMapLocationDot}/> :
								''
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
