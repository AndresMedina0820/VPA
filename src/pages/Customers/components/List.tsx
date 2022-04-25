import { useState } from "react";
import {CardCustom} from "../../../styled-components/GlobalStyles.styles";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const Customers = () => {	
	const [show, setShow] = useState(false);
	const { customer } = useLocalStorage();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<CardCustom>
				<div className="px-3 d-flex justify-content-between">
					<input type="text" className="form-control w-25" placeholder="Buscar" />
					<Link to="/clientes/nuevo">
						<Button variant="primary" >
							<i className="bi bi-plus-lg"></i>
							Nuevo Cliente
						</Button>
					</Link>
				</div>
				<hr />
				<CardCustom.Body>
					<Table responsive bordered hover>
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
						{ customer.map((custom, index) => (
							<tr key={index+1}>
								<td>{index+1}</td>
								<td>{custom['id_customer']}</td>
								<td>{custom['type_id_customer']}</td>
								<td>{custom['names_customer']}</td>
								<td>{custom['last_names_customer']}</td>
								<td>{custom['email_customer']}</td>
								<td>{custom['phone_customer']}</td>
								<td>{custom['city_customer']}</td>
								<td className="text-center">
									<Link to={'/clientes/editar'} state={{custom: custom}}>
										<Button type="button" className="me-2" variant="primary">
											<i className="bi bi-pencil"></i>
										</Button>
									</Link>
									<Button type="button" variant="danger" onClick={handleShow}><i className="bi bi-trash"></i></Button>
								</td>
							</tr>
						)) }
					</tbody>
					</Table>
				</CardCustom.Body>
			</CardCustom>
			<p className="fw-bold">Pagina 1/20</p>
			
			<Modal show={show} onHide={handleClose} className="text-danger">
				<Modal.Header closeButton>
					<Modal.Title>Eliminar Cliente</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>¿Estas seguro de eliminar este cliente?</p>
				</Modal.Body>

				<Modal.Footer>
				<Button type="button" variant="secondary" onClick={handleClose}>Close</Button>
				<Button type="button" variant="danger">
					<i className="bi bi-trash"></i>
					Eliminar
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
