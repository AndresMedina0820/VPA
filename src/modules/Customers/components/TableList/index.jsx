/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { OptionsButtons } from '../OptionsButtons';
import { deleteCustomers } from '../../services/customerService';
import Swal from "sweetalert2";

export const TableList = ({customers, getCustomer}) => {
	const openModal = (customer) => {
		console.log("OPEN MODAL:", customer)
		Swal.fire({
			title: 'Eliminar Cliente',
			text: `¿Estas seguro de eliminar a ${customer?.name}?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#dc3545',
			cancelButtonColor: '#5c636a',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		  }).then((resp) => {
			console.log(resp)
			if (resp.isConfirmed) {
				deleteCustomers(customer.id)
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
				<table className="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Identificación</th>
							<th>Tipo de ID</th>
							<th>Nombres</th>
							<th>Apellidos</th>
							<th>Correo Electronico</th>
							<th>Celular</th>
							<th>Ciudad</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="align-middle">
						{ customers.map((customer, index) => (
							<tr key={customer.id}>
								<td>{index+1}</td>
								<td>{customer.customerId}</td>
								<td className="text-center">{customer.type_id.name}</td>
								<td>{customer.name}</td>
								<td>{customer.lastName}</td>
								<td>{customer.email}</td>
								<td>{customer.phone}</td>
								<td>{customer.city}</td>
								<td className="text-center">
									<OptionsButtons getCustomer={getCustomer} type={'clientes'} openModal={openModal} data={customer}/>
								</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		</Fragment>
	)
}
