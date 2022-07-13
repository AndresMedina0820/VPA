/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import UserDefault from '../../../../static/images/user-default.jpg';
import { OptionsButtons } from '../OptionsButtons';
import Swal from "sweetalert2";
import { deleteUsers } from '../../services/userService';

export const CardDetails = ({users}) => {

	const reloadCustom = () => {
		document.location.reload()
	}

	const openModal = (user) => {
		console.log("OPEN MODAL:", user)
		Swal.fire({
			title: 'Eliminar Cliente',
			text: `¿Estas seguro de eliminar a ${user?.name}?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#dc3545',
			cancelButtonColor: '#5c636a',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		  }).then((resp) => {
			console.log(resp)
			if (resp.isConfirmed) {
				deleteUsers(user.id)
				.then((result) => {
					try {
						if (result.status === 201) {
							console.log(result);
							Swal.fire(
								'¡Eliminado Correctamente!',
								'',
								'success'
							);
							setTimeout(
								reloadCustom(),
								5000
							)
						} else {
							Swal.fire(
								'¡Error!',
								'Error al Eliminar',
								'error'
							)
						}
					} catch (error) {
						Swal.fire(
							'¡Error!',
							'Error al Eliminar',
							'error'
						)
					}
				});
			}
		})
	}

	return (
		<div className="row">
			{ users.map((user) => (
				<div className="col-md-4 my-2" key={user.id}>
					<Card className="px-2 shadow-sm">
						<div className="d-flex justify-content-end mt-2">
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
								<OptionsButtons openModal={openModal} user={user}/>
							</div>
						</div>
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">{user.name}</p>
							<span className={`mb-3 badge rounded-pill ${
											user.role.id === 0 ?
											'bg-primary' : user.role.id === 1 ? 'bg-success' : 'bg-warning'
							}`}>
								{user.role.name}
							</span>
							<div>
								<p className="m-0">Identificacion: <span className="fw-bold">{user.userId}</span></p>
								<p className="m-0">Tipo de Identificacion: <span className="fw-bold">{user.type_id.name}</span></p>
								<p className="m-0">Correo Electronico: <span className="fw-bold">{user.email}</span></p>
							</div>
						</Card.Body>
					</Card>
				</div>
			)) }
		</div>
  	)
}
