import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconSave from '../../../static/icons/icon-save.svg';
import { createBuses } from '../services/busesService';

export const FormBuses = () => {
	const [formData, setFormData] = useState({
		'license_plate_bus': '',
		'quantity_bus': 0,
		'company_bus': '',
	});
	const navigate = useNavigate();
	let params = useParams();
	const [user, setUser] = useState([]);
	const { register, setValue, handleSubmit, formState: { errors } } = useForm({
		// defaultValues: {name: user.name}
	});

	/**
	 * TODO: Make Form Validator
	 */

	const onSubmit = (data) => {
		console.log("formData: ", data);
		debugger
		createBuses(data)
		.then((result) => {
			console.log('result: ',result)
		});
		navigate('/buses');
	}

	// const handleChange = (event) => {
	// 	const { id, value } = event.target;
	// 	setFormData({...formData, [id]: value});
	// }

	// I can setvalue input with information of var formData
	// const {
	// 	license_plate_bus,
	// 	quantity_bus,
	// 	company_bus,
	// } = formData;
	return (
		<>
			<Form noValidate onSubmit={handleSubmit(onSubmit)}>
				<CardCustom>
					<div className="row">
						<div className="mb-4 col-md-12">
							<h2 className="m-0">Nuevo Bus</h2>
							<small style={{color: "#B5B5B5"}}>Esta es la información acerca del bus</small>
						</div>
						<div className="col-md-6">
							<label className="form-label">Placa</label>
							<div className="input-group">
								<input type="text" autoComplete='off' className={`form-control ${errors.licensePlate && "border-danger"}`}
								{...register("licensePlate", { required: true })}/>
							</div>
							{ errors.licensePlate &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Capacidad</label>
							<div className="input-group">
								<input type="number" autoComplete='off' className={`form-control ${errors.capacity && "border-danger"}`}
								{...register("capacity", { required: true })}/>
							</div>
							{ errors.capacity &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Compania</label>
							<div className="input-group">
								<input type="text" autoComplete='off' className={`form-control ${errors.company && "border-danger"}`}
								{...register("company", { required: true })}/>
							</div>
							{ errors.company &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
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
