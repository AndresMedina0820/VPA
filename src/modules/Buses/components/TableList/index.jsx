/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { OptionsButtons } from '../OptionsButtons/index';
import { deleteBuses } from '../../services/busesService';
import Swal from 'sweetalert2';

export const TableList = ({buses}) => {

	const openModal = (bus) => {
		console.log("OPEN MODAL:", bus)
		Swal.fire({
			title: 'Eliminar Bus',
			text: `¿Estas seguro de eliminar el bus ${bus?.company.name}(${bus?.licensePlate})?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#dc3545',
			cancelButtonColor: '#5c636a',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		  }).then((resp) => {
			console.log(resp)
			if (resp.isConfirmed) {
				deleteBuses(bus.id)
				.then((result) => {
					try {
						if (result.status === 201) {
							console.log(result);
							Swal.fire(
								'¡Eliminado Correctamente!',
								'',
								'success'
							);
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
		<Fragment>
			<div className="table-responsive">
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Placa</th>
							<th>Capacidad</th>
							<th>Empresa</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="align-middle">
						{ buses.map((bus, index) => (
							<tr key={bus.id}>
								<td>{index+1}</td>
								<td>{bus.licensePlate}</td>
								<td>{bus.capacity}</td>
								<td>{bus.company.name}</td>
								<td className="text-center">
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
										<OptionsButtons openModal={openModal} data={bus}/>
									</div>
								</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		</Fragment>
	)
}
