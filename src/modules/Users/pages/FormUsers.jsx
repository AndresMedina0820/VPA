import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconSave from "../../../static/icons/icon-save.svg";
import Image from 'react-bootstrap/Image';
import UserDefault from '../../../static/images/user-default.jpg';

export const FormUsers = () => {
	const [formData, setFormData] = useState({
		'id_user': '',
		'type_id_user': 1,
		'names_user': '',
		'last_names_user': '',
		'email_user': '',
		'role_user': 0,
	});
	const navigate = useNavigate();

	/**
	 * TODO: Make Form Validator
	 */

	const handleSubmit = (event) => {
		event.preventDefault();;
		navigate('/usuarios');
	}

	const handleChange = (event) => {
		const { id, value } = event.target;
		setFormData({...formData, [id]: value});
	}

	// I can setvalue input with information of var formData
	const {
		id_user,
		type_id_user,
		names_user,
		last_names_user,
		email_user,
		role_user,
	} = formData;

	return (
		<>
			<Form noValidate onSubmit={handleSubmit}>
				<CardCustom>
					<Row>
						<Col md={12} className="mb-4">
							<h2 className="m-0">Nuevo Usuario</h2>
							<small style={{color: "#B5B5B5"}}>Esta es la información acerca del usuario</small>
						</Col>
						<Col md={12} className="mb-5 text-center">
							<Image src={UserDefault} roundedCircle style={{width: "6rem"}}/>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="id_user">
								<Form.Label>Número de identificación</Form.Label>
								<Form.Control type="text" autoComplete='off' value={id_user} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="type_id_user">
								<Form.Label>Tipo de identificación</Form.Label>
								<Form.Select aria-label="Type ID" onChange={handleChange} value={type_id_user}>
									<option value="1">CC</option>
									<option value="2">TI</option>
									<option value="3">RC</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="names_user">
								<Form.Label>Nombres</Form.Label>
								<Form.Control type="text" autoComplete='off' value={names_user} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="last_names_user">
								<Form.Label>Apellidos</Form.Label>
								<Form.Control type="text" autoComplete='off' value={last_names_user} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="email_user">
								<Form.Label>Correo Electrónico</Form.Label>
								<Form.Control type="email" autoComplete='off' value={email_user} onChange={handleChange}/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3" controlId="role_user">
								<Form.Label>Rol</Form.Label>
								<Form.Select aria-label="Role" onChange={handleChange} value={role_user}>
									<option value="1">Asesor</option>
									<option value="2">Programador</option>
									<option value="3">Administrador</option>
								</Form.Select>
							</Form.Group>
						</Col>
					</Row>
				</CardCustom>
				<WrapperButtons>
					<Link to={'/usuarios'}>
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
