/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

export const OptionsButtons = ({data, openModal}) => {
	console.log(data)

	return (
		<div className="d-flex flex-column align-items-start justify-content-center mx-3">
			<Link to={`/buses/${data.id}`} className="text-decoration-none w-100">
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
	)
}
