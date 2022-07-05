import { useState } from 'react';
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconSave from '../../../static/icons/icon-save.svg';

export const FormBuses = () => {
	const [formData, setFormData] = useState({
		'license_plate_bus': '',
		'quantity_bus': 0,
		'company_bus': '',
	});
	const navigate = useNavigate();

	/**
	 * TODO: Make Form Validator
	 */

	const handleSubmit = (event) => {
		event.preventDefault();;
		navigate('/clientes');
	}

	const handleChange = (event) => {
		const { id, value } = event.target;
		setFormData({...formData, [id]: value});
	}

	// I can setvalue input with information of var formData
	const {
		license_plate_bus,
		quantity_bus,
		company_bus,
	} = formData;
	return (
		<>
			<Form noValidate onSubmit={handleSubmit}>
				<CardCustom>
					<Row>
						<Col md={12} className="mb-4">
							<h2 className="m-0">Nuevo Bus</h2>
							<small style={{color: "#B5B5B5"}}>Esta es la información acerca del bus</small>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="license_plate_bus">
								<Form.Label>Placa</Form.Label>
								<Form.Control type="text" autoComplete='off' value={license_plate_bus} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="quantity_bus">
								<Form.Label>Capacidad</Form.Label>
								<Form.Control type="number" autoComplete='off' value={quantity_bus} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="company_bus">
								<Form.Label>Empresa</Form.Label>
								<Form.Control type="text" autoComplete='off' value={company_bus} onChange={handleChange}/>
							</Form.Group>
						</Col>
					</Row>
				</CardCustom>
				<WrapperButtons>
					<Link to={'/buses'}>
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
