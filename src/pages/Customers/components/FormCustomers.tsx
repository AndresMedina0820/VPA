import { useState } from 'react';
import { CardCustom, WrapperButtons, Icon } from "../../../styled-components/GlobalStyles.styles";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconSave from "../../../assets/icons/icon-save.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';


export const FormCustomers = () => {
	const {saveCustomer} = useLocalStorage();

	const [formData, setFormData] = useState({
		'id_customer': '',
		'type_id_customer': 1,
		'names_customer': '',
		'last_names_customer': '',
		'date_born_customer': '',
		'email_customer': '',
		'phone_customer': 0,
		'city_customer': '',
		'address_customer': '',
	});
	const navigate = useNavigate();

	/**
	 * TODO: Make Form Validator
	 */

	const handleSubmit = (event: {preventDefault: () => void; target: any; }) => {
		event.preventDefault();
		saveCustomer(formData);
		navigate('/clientes');
	}

	const handleChange = (event: { target: any }) => {
		const { id, value } = event.target;
		setFormData({...formData, [id]: value});
	}

	// I can setvalue input with information of var formData
	const {
		id_customer,
		type_id_customer,
		names_customer,
		last_names_customer,
		date_born_customer,
		email_customer,
		phone_customer,
		city_customer,
		address_customer,
	} = formData;

	return (
		<>
		<Form noValidate onSubmit={handleSubmit}>
			<CardCustom>
				<Row>
					<Col md={12} className="mb-4">
						<h2 className="m-0">Nuevo Cliente</h2>
						<small style={{color: "#B5B5B5"}}>Esta es la información acerca del cliente</small>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="id_customer">
							<Form.Label>Número de identificación</Form.Label>
							<Form.Control type="text" autoComplete='off' value={id_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="type_id_customer">
							<Form.Label>Tipo de identificación</Form.Label>
							<Form.Select aria-label="Type ID" onChange={handleChange} value={type_id_customer}>
								<option value="1">CC</option>
								<option value="2">TI</option>
								<option value="3">RC</option>
							</Form.Select>
						</Form.Group>	
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="names_customer">
							<Form.Label>Nombres</Form.Label>
							<Form.Control type="text" autoComplete='off' value={names_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="last_names_customer">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control type="text" autoComplete='off' value={last_names_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="date_born_customer">
							<Form.Label>Fecha de Nacimiento</Form.Label>
							<Form.Control type="date" autoComplete='off' value={date_born_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="email_customer">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" autoComplete='off' value={email_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="phone_customer">
							<Form.Label>Teléfono/Celular</Form.Label>
							<Form.Control type="number" autoComplete='off' value={phone_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="city_customer">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control type="text" autoComplete='off' value={city_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group className="mb-3" controlId="address_customer">
							<Form.Label>Dirección</Form.Label>
							<Form.Control as="textarea" rows={3} autoComplete='off' value={address_customer} onChange={handleChange}/>
						</Form.Group>
					</Col>
				</Row>
			</CardCustom>
			<WrapperButtons>
				<Link to={'/clientes'}>
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
		</>
	)
}
