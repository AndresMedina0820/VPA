import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import UserDefault from '../../../static/images/user-default.jpg'

export const Users = () => {	
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card className="mb-3 p-0 shadow-sm">
				<Card.Body>
					<div className="px-3 d-flex justify-content-between">
						<input type="text" className="form-control w-25" placeholder="Buscar" />
						<Link to="/usuarios/nuevo">
							<Button variant="primary" >
								<i className="bi bi-plus-lg"></i>
								Nuevo Usuario
							</Button>
						</Link>
					</div>
				</Card.Body>
			</Card>
			<Row>
				<Col md={4} className="my-2">
					<Card className="px-2 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">			
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">Luis Angel Luligo</p>
							<Badge pill bg="primary" className="mb-3">Asesor</Badge>
								<div>
									<p className="m-0">Identificacion: <span className="fw-bold">111111</span></p>
									<p className="m-0">Tipo de Identificacion: <span className="fw-bold">CC</span></p>
									<p className="m-0">Correo Electronico: <span className="fw-bold">luisangel@gmail.com</span></p>
								</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="my-2">
					<Card className="px-2 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">Luis Angel Luligo</p>
							<Badge pill bg="primary" className="mb-3">Asesor</Badge>
								<div>
									<p className="m-0">Identificacion: <span className="fw-bold">111111</span></p>
									<p className="m-0">Tipo de Identificacion: <span className="fw-bold">CC</span></p>
									<p className="m-0">Correo Electronico: <span className="fw-bold">luisangel@gmail.com</span></p>
								</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="my-2">
					<Card className="px-2 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">Luis Angel Luligo</p>
							<Badge pill bg="primary" className="mb-3">Asesor</Badge>
								<div>
									<p className="m-0">Identificacion: <span className="fw-bold">111111</span></p>
									<p className="m-0">Tipo de Identificacion: <span className="fw-bold">CC</span></p>
									<p className="m-0">Correo Electronico: <span className="fw-bold">luisangel@gmail.com</span></p>
								</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="my-2">
					<Card className="px-2 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">Luis Angel Luligo</p>
							<Badge pill bg="primary" className="mb-3">Asesor</Badge>
								<div>
									<p className="m-0">Identificacion: <span className="fw-bold">111111</span></p>
									<p className="m-0">Tipo de Identificacion: <span className="fw-bold">CC</span></p>
									<p className="m-0">Correo Electronico: <span className="fw-bold">luisangel@gmail.com</span></p>
								</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			
			<Modal show={show} onHide={handleClose} className="text-danger">
				<Modal.Header closeButton>
					<Modal.Title>Eliminar Cliente</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>¿Estas seguro de eliminar este usuario?</p>
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
