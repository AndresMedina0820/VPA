import { useState } from 'react';
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconSave from "../../../static/icons/icon-save.svg";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const FormTravels = () => {
	const [formData, setFormData] = useState({
		'name_travel': '',
		'destination_travel': '',
		'departure_date': '',
		'bus_travel': '',
	});
	const navigate = useNavigate();
	const { customer } = useLocalStorage();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	/**
	 * TODO: Make Form Validator
	 */

	const handleSubmit = (event: {preventDefault: () => void; target: any; }) => {
		event.preventDefault();;
		navigate('/clientes');
	}

	const handleChange = (event: { target: any }) => {
		const { id, value } = event.target;
		setFormData({...formData, [id]: value});
	}

	// I can setvalue input with information of var formData
	const {
		name_travel,
		destination_travel,
		departure_date,
		bus_travel,
	} = formData;
	return (
		<>
			<Form noValidate onSubmit={handleSubmit}>
				<CardCustom className="mb-4">
					<Row>
						<Col md={12} className="mb-4">
							<h2 className="m-0">Nuevo Viaje</h2>
							<small style={{color: "#B5B5B5"}}>Esta es la información acerca del viaje</small>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="name_travel">
								<Form.Label>Nombre</Form.Label>
								<Form.Control type="text" autoComplete='off' value={name_travel} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="destination_travel">
								<Form.Label>Destino</Form.Label>
								<Form.Control type="number" autoComplete='off' value={destination_travel} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="departure_date">
								<Form.Label>Fecha de Salida</Form.Label>
								<Form.Control type="text" autoComplete='off' value={departure_date} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="bus_travel">
								<Form.Label>Bus</Form.Label>
								<Form.Control type="text" autoComplete='off' value={bus_travel} onChange={handleChange}/>
							</Form.Group>
						</Col>
					</Row>
				</CardCustom>

				<CardCustom>
					<div className="px-3 d-flex justify-content-between">
						<input type="text" className="form-control w-25" placeholder="Buscar" />
						<Link to={'/clientes/nuevo'}>
							<Button variant="primary" >
								<i className="bi bi-person-plus me-2"></i>
								Agregar Acompanante
							</Button>
						</Link>
					</div>
					<hr />d
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
											<Link to={'/clientes/editar'}>
												<Button type="button" className="me-2" variant="primary">
													<i className="bi bi-pencil"></i>
												</Button>
											</Link>
											<Button type="button" variant="secondary" onClick={handleShow}>
												<i className="bi bi-people"></i>
											</Button>
										</td>
									</tr>
								)) }
							</tbody>
						</Table>
					</CardCustom.Body>
				</CardCustom>
				<WrapperButtons>
					<Link to={'/viajes'}>
						<Button variant="secondary" type="button">
							Cancelar
						</Button>
					</Link>
					<Button variant="success" className="ms-2" type="submit">
						<Icon src={IconSave}></Icon>
						Guardar
					</Button>
				</WrapperButtons>
			</Form>
			<Modal size="xl" show={show} onHide={handleClose} scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Acompanantes</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
											<Button type="button" variant="danger">
												<i className="bi bi-person-dash"></i>
											</Button>
										</td>
									</tr>
								)) }
							</tbody>
						</Table>
				</Modal.Body>
				<Modal.Footer>
				<Button type="button" variant="secondary" onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
