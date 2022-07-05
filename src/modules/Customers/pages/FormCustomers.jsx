import { useEffect, useState }  from "react";
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import IconSave from '../../../static/icons/icon-save.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { usePostCustomers } from '../hooks/usePostCustomers';
import { createCustomers } from '../services/customerService';
import { getOneCustomers } from '../services/customerService';


// type FormData = {
// 	customerId: string,
// 	typeId: string,
// 	name: string,
// 	lastName: string,
// 	dateBirth: Date,
// 	isChild: boolean,
// 	email: string,
// 	phone: string,
// 	city: string,
// 	customerType: string,
// 	address: string
// }

export const FormCustomers = () => {

	let params = useParams();
	const [customer, setCustomer] = useState([]);

	useEffect(() => {
		try {
			if (params.customer_id) {
				console.log("ENTREEE")
				getOneCustomers(parseInt(params.customer_id))
				.then((result) => {
					setCustomer(result.data ? result.data : []);
					// if (result) {
					// 	customer.push(result?.data)
					// }
				});
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	console.log("customer: ",customer)

	const { register, setValue, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {name: customer.name}
	});
	const navigate = useNavigate();

	// const [formData, setFormData] = useState({
	// 	'customerId': '',
	// 	'typeId': '1',
	// 	'name': '',
	// 	'lastName': '',
	// 	'dateBirth': '',
	// 	'email': '',
	// 	'phone': 0,
	// 	'city': '',
	// 	'address': '',
	// });

	/**
	 * TODO: Make Form Validator
	 */

	const onSubmit = (data) => {
		console.log("formData: ", data);
		createCustomers(data)
		.then((result) => {
			console.log('result: ',result)
		});
		navigate('/clientes');
	}

	const ValidationIsChild = (event) => {
		const date = new Date(event.target.value);
		const now = new Date();
		console.log('isChild', date.getFullYear());
		const result = now.getFullYear() - date.getFullYear();
		console.log('result',result);
		if (result > 3) {
			setValue("isChild", false);
		} else {
			setValue("isChild", true);
		}
	}

	// const handleChange = (event: { target: any }) => {
	// 	const { id, value } = event.target;
	// 	setFormData({...formData, [id]: value});
	// }

	// I can setvalue input with information of var formData
	// const {
	// 	customerId,
	// 	typeId,
	// 	name,
	// 	lastName,
	// 	dateBirth,
	// 	email,
	// 	phone,
	// 	city,
	// 	address,
	// } = formData;

	return (
		<>
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<CardCustom>
				<div className="row" style={{"paddingLeft": "6rem", "paddingRight": "6rem"}}>
					<div className="col-md-12 mb-4">
						<h2 className="m-0">Nuevo Cliente</h2>
						<small style={{color: "#B5B5B5"}}>Esta es la información acerca del cliente</small>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Número de identificación</Form.Label>
							<Form.Control type="text" autoComplete='off' className={errors.customerId && "border-danger"}
							{...register("customerId", { required: true })}/>
							{ errors.customerId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Tipo de identificación</Form.Label>
							<Form.Select aria-label="Type Customer" className={errors.typeId && "border-danger"}
							{...register("customerType", { required: true })}>
								<option value="0">CC</option>
								<option value="1">TI</option>
								<option value="2">RC</option>
							</Form.Select>
							{ errors.customerType &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Nombres</Form.Label>
							<Form.Control type="text" autoComplete='off' className={errors.name && "border-danger"}
							{...register("name", { required: true })}/>
							{ errors.name &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control type="text" autoComplete='off' className={errors.lastName && "border-danger"}
							{...register("lastName", { required: true })}/>
							{ errors.lastName &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Fecha de Nacimiento</Form.Label>
							<Form.Control type="date" autoComplete='off' className={errors.dateBirth && "border-danger"}
							{...register("dateBirth", { required: true })} onChange={ValidationIsChild}/>
							{ errors.dateBirth &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" autoComplete='off' className={errors.email && "border-danger"}
							{...register("email", { required: true })}/>
							{ errors.email &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Teléfono/Celular</Form.Label>
							<Form.Control type="number" autoComplete='off' className={errors.phone && "border-danger"}
							{...register("phone", { required: true })}/>
							{ errors.phone &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control type="text" autoComplete='off' className={errors.city && "border-danger"}
							{...register("city", { required: true })}/>
							{ errors.city &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Tipo de Cliente</Form.Label>
							<Form.Select aria-label="Type ID" className={errors.typeId && "border-danger"}
							{...register("typeId", { required: true })}>
								<option value="0">Interno</option>
								<option value="1">Externo</option>
							</Form.Select>
							{ errors.typeId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="mb-3">
							<Form.Label>Dirección</Form.Label>
							<Form.Control as="textarea" rows={3} autoComplete='off' className={errors.address && "border-danger"}
							{...register("address", { required: false })}/>
							{ errors.address &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</Form.Group>
					</div>
				</div>
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
