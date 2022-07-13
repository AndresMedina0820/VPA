import { useEffect, useContext }  from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CardCustom, WrapperButtons, Label } from '../../../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import { createCustomers, updateCustomers } from '../services/customerService';
import { ToastContext } from '../../../contexts/ToastContext';
import { getOneCustomers } from '../services/customerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export const FormCustomers = () => {
	const { setOpenToast, setDescriptionToast, setIconToast } = useContext(ToastContext);
	const navigate = useNavigate();
	const today = new Date("dd/mm/yyyy");
	console.log("today: ", today);
	const { register, setValue, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		defaultValues: {
			customerDetails: {
				customerId: '',
				typeId: '1',
				name: '',
				lastName: '',
				dateBirth: '',
				isChild: false,
				email: '',
				phone: '',
				city: '',
				customerType: '0',
				address: ''
			}
		}
	});
	const params = useParams();
	const paramsId = params ? parseInt(params.customer_id, 10) : '';

	useEffect(() => {
        try {
			if (paramsId) {
				getOneCustomers(paramsId)
				.then((result) => {
					setValue('customerDetails', {...result.data});
					setValue('customerDetails.dateBirth', "");
				});
			}
        } catch (error) {
            console.error(error);
			setDescriptionToast(error);
			setIconToast('error');
			setOpenToast(true);
        }
    }, [paramsId, setValue]);

	const onSubmit = (data) => {
		if (paramsId) {
			updateCustomer(paramsId, data.customerDetails);
		} else {
			createCustomer(data.customerDetails);
		}
	}

	const createCustomer = (data) => {
		createCustomers(data)
		.then(() => {
			setDescriptionToast("¡Cliente creado correctamente!");
			setIconToast('success');
			setOpenToast(true);
			navigate('/clientes');
		})
		.catch((error) => {
			setDescriptionToast(error.response.data.message);
			setIconToast('error');
			setOpenToast(true);
		});
	};

	const updateCustomer = (id, data) => {
		updateCustomers(id, data)
		.then(() => {
			setDescriptionToast("¡Cliente actualizado correctamente!");
			setIconToast('success');
			setOpenToast(true);
			navigate('/clientes');
		})
		.catch((error) => {
			setDescriptionToast(error.response.data.message);
			setIconToast('error');
			setOpenToast(true);
		});
	};

	const ValidationIsChild = (event) => {
		console.log("ValidationIsChild")
		const date = new Date(event.target.value);
		const now = new Date();
		const result = now.getFullYear() - date.getFullYear();
		if (result > 3) {
			setValue("customerDetails.isChild", false);
		} else {
			setValue("customerDetails.isChild", true);
		}
	}

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)}>
			<CardCustom>
				<div className="row" style={{"paddingLeft": "6rem", "paddingRight": "6rem"}}>
					<div className="col-md-12 mb-4">
						{ 	params.customer_id ?
								<h2 className="m-0">Editar Cliente</h2>
							:	<h2 className="m-0">Nuevo Cliente</h2>
						}
						<small style={{color: "#B5B5B5"}}>Esta es la información acerca del cliente</small>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="text" autoComplete="off" placeholder="Número de identificación"
								className={`form-control ${errors.customerDetails?.customerId && "is-invalid"}`}
								 {...register("customerDetails.customerId", { required: true })}/>
							<Label>Número de identificación</Label>
							{ errors.customerDetails?.customerId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<select aria-label="Type Customer" placeholder="Tipo de identificación"
							className={`form-select ${errors.customerDetails?.typeId && "is-invalid"}`}
							{...register("customerDetails.customerType", { required: true })}>
								<option value="0">CC</option>
								<option value="1">TI</option>
								<option value="2">RC</option>
							</select>
							<Label>Tipo de identificación</Label>
							{ errors.customerDetails?.customerType &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="text" autoComplete="off" placeholder="Nombres" className={`form-control ${errors.customerDetails?.name && "is-invalid"}`}
								{...register("customerDetails.name", { required: true })}/>
							<Label>Nombres</Label>
							{ errors.customerDetails?.name &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="text" autoComplete="off" placeholder="Apellidos" className={`form-control ${errors.customerDetails?.lastName && "is-invalid"}`}
							{...register("customerDetails.lastName", { required: true })}/>
							<Label>Apellidos</Label>
							{ errors.customerDetails?.lastName &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="date" name="date" autoComplete="off" placeholder="Fecha de Nacimiento"
								min="1900-01-01" max="2030-12-31"
								className={`form-control ${errors.customerDetails?.dateBirth && "is-invalid"}`}
								{...register("customerDetails.dateBirth", { required: true })} onChange={ValidationIsChild}/>
							<Label>Fecha de Nacimiento</Label>
							{ errors.customerDetails?.dateBirth &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="email" autoComplete="off" placeholder="Correo Electrónico" className={`form-control ${errors.customerDetails?.email && "is-invalid"}`}
								{...register("customerDetails.email", { required: true })}/>
							<Label>Correo Electrónico</Label>
							{ errors.customerDetails?.email &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="text" autoComplete="off" placeholder="Teléfono/Celular" className={`form-control ${errors.customerDetails?.phone && "is-invalid"}`}
							{...register("customerDetails.phone", { required: true })}/>
							<Label>Teléfono/Celular</Label>
							{ errors.customerDetails?.phone &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input type="text" autoComplete="off" placeholder="Ciudad" className={`form-control ${errors.customerDetails?.city && "is-invalid"}`}
							{...register("customerDetails.city", { required: true })}/>
							<Label>Ciudad</Label>
							{ errors.customerDetails?.city &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<select aria-label="Type ID" placeholder="Tipo de Cliente" className={`form-select ${errors.customerDetails?.typeId && "is-invalid"}`}
							{...register("customerDetails.typeId", { required: true })}>
								<option value="0">Interno</option>
								<option value="1">Externo</option>
							</select>
							<Label>Tipo de Cliente</Label>
							{ errors.customerDetails?.typeId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<textarea as="textarea" rows={3} autoComplete="off" placeholder="Dirección"
							className={`form-control ${errors.customerDetails?.address && "is-invalid"}`}
							{...register("customerDetails.address", { required: true })}></textarea>
							<Label>Dirección</Label>
							{ errors.customerDetails?.address &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
				</div>
			</CardCustom>
			<WrapperButtons>
				<Link to={'/clientes'}>
					<button className="btn btn-secondary" type="button">
						Cancelar
					</button>
				</Link>
				<button className="btn btn-success ms-2" type="submit">
					<FontAwesomeIcon icon={faFloppyDisk} className="me-2" />
					Guardar
				</button>
			</WrapperButtons>
		</form>
	)
}
