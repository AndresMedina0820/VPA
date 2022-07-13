import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CardCustom, WrapperButtons, Icon } from "../../../styles/GlobalStyles";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import IconSave from "../../../static/icons/icon-save.svg";
import Image from 'react-bootstrap/Image';
import UserDefault from '../../../static/images/user-default.jpg';
import { createUsers } from '../services/userService';

export const FormUsers = () => {
	// const [formData, setFormData] = useState({
	// 	'id_user': '',
	// 	'type_id_user': 1,
	// 	'names_user': '',
	// 	'last_names_user': '',
	// 	'email_user': '',
	// 	'role_user': 0,
	// });
	let params = useParams();
	const [user, setUser] = useState([]);
	const navigate = useNavigate();

	const { register, setValue, handleSubmit, formState: { errors } } = useForm({
		// defaultValues: {name: user.name}
	});

	const onSubmit = (data) => {
		console.log("formData: ", data);
		createUsers(data)
		.then((result) => {
			console.log('result: ',result)
		});
		navigate('/usuarios');
	}

	// I can setvalue input with information of var formData
	// const {
	// 	id_user,
	// 	type_id_user,
	// 	names_user,
	// 	last_names_user,
	// 	email_user,
	// 	role_user,
	// } = formData;

	return (
		<>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<CardCustom>
					<div className="row">
						<div className="col-md-12 mb-4">
							<h2 className="m-0">Nuevo Usuario</h2>
							<small style={{color: "#B5B5B5"}}>Esta es la información acerca del usuario</small>
						</div>
						<div className="col-md-12 mb-5 text-center">
							<Image src={UserDefault} roundedCircle style={{width: "6rem"}}/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Número de identificación</label>
							<div className="input-group">
								<input type="text" autoComplete='off' className={`form-control ${errors.customerId && "border-danger"}`}
								{...register("userId", { required: true })}/>
							</div>
							{ errors.userId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Tipo de identificación</label>
							<div className="input-group">
								<select aria-label="Type ID" className={`form-select ${errors.typeId && "border-danger"}`}
								{...register("typeId", { required: true })}>
									<option value="0">CC</option>
									<option value="1">TI</option>
									<option value="2">RC</option>
								</select>
							</div>
							{ errors.typeId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Nombres</label>
							<div className="input-group">
								<input type="text" autoComplete="off" className={`form-control ${errors.customerId && "border-danger"}`}
								{...register("name", { required: true })}/>
							</div>
							{ errors.name &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Apellidos</label>
							<div className="input-group">
								<input type="text" autoComplete="off" className={`form-control ${errors.customerId && "border-danger"}`}
								{...register("lastName", { required: true })}/>
							</div>
							{ errors.lastName &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Correo Electrónico</label>
							<div className="input-group">
								<input type="email" autoComplete="off" className={`form-control ${errors.customerId && "border-danger"}`}
								{...register("email", { required: true })}/>
							</div>
							{ errors.email &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Rol</label>
							<div className="input-group">
								<select aria-label="Role" className={`form-select ${errors.roleId && "border-danger"}`}
								{...register("roleId", { required: true })}>
									<option value="0">Asesor</option>
									<option value="1">Programador</option>
									<option value="2">Administrador</option>
								</select>
							</div>
							{ errors.roleId &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
						<div className="col-md-6">
							<label className="form-label">Contrasena</label>
							<div className="input-group">
								<input type="password" autoComplete="off" className={`form-control ${errors.password && "border-danger"}`}
								{...register("password", { required: true })}/>
							</div>
							{ errors.password &&
								<small className="text-danger d-block mb-2">
									¡Campo Obligatorio!
								</small>
							}
						</div>
					</div>
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
			</form>
		</>
	)
}
