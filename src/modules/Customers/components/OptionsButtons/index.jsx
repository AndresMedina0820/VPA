/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const OptionsButtons = ({type = 'clientes' ,data, openModal}) => {

	return (
		<Fragment>
			<a  type="button"
				id="dropdownMenuButton"
				data-bs-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				className="text-decoration-none"
			>
				<FontAwesomeIcon icon={faEllipsisVertical}/>
			</a>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<div className="d-flex flex-column align-items-start justify-content-center mx-3">
					<Link to={`/${type}/${data.id}`} className="text-decoration-none w-100">
					<FontAwesomeIcon icon={faPenToSquare} className="me-2"/>
						<span>Editar</span>
					</Link>
					<a className="text-danger cursor-pointer mt-1 w-100" onClick={() => {openModal(data)}}>
						<div>
						<FontAwesomeIcon icon={faTrashCan} className="me-2"/>
							<span>Eliminar</span>
						</div>
					</a>
				</div>
			</div>
		</Fragment>
	)
}
