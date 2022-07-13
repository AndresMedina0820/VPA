/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

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
				<i className="bi bi-three-dots-vertical"></i>
			</a>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<div className="d-flex flex-column align-items-start justify-content-center mx-3">
					<Link to={`/${type}/${data.id}`} className="text-decoration-none w-100">
						<i className="bi bi-pencil me-2"></i>
						<span>Editar</span>
					</Link>
					<a className="text-danger cursor-pointer mt-1 w-100" onClick={() => {openModal(data)}}>
						<div>
							<i className="bi bi-trash me-2"></i>
							<span>Eliminar</span>
						</div>
					</a>
				</div>
			</div>
		</Fragment>
	)
}
