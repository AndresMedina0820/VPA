import { useState } from "react";
import {CardCustom} from "../../../styled-components/GlobalStyles.styles";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

export const Buses = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  return (
    <>
     	<CardCustom>
			<div className="px-3 d-flex justify-content-between">
				<input type="text" className="form-control w-25" placeholder="Buscar" />
				<Link to="/buses/nuevo">
					<Button variant="primary" >
						<i className="bi bi-plus-lg"></i>
						Nuevo Bus
					</Button>
				</Link>
			</div>
			<hr />
			<CardCustom.Body>
				<Table responsive bordered hover>
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
					<tr>
						<td>1</td>
						<td></td>
						<td></td>
						<td></td>
						<td className="text-center">
							<Link to={'/buses/editar'}>
								<Button type="button" className="me-2" variant="primary">
									<i className="bi bi-pencil"></i>
								</Button>
							</Link>
							<Button type="button" variant="danger" onClick={handleShow}><i className="bi bi-trash"></i></Button>
						</td>
					</tr>
				</tbody>
				</Table>
			</CardCustom.Body>
		</CardCustom>
		<p className="fw-bold">Pagina 1/20</p>
		<Modal show={show} onHide={handleClose} className="text-danger">
			<Modal.Header closeButton>
				<Modal.Title>Eliminar Bus</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>¿Estas seguro de eliminar este bus?</p>
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
