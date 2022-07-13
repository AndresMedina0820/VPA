import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import UserDefault from '../../../../static/images/user-default.jpg';

export const CardDetails = ({users}) => {

	return (
		<div className="row">
			{ users.map((user) => (
				<div className="col-md-4 my-2" key={user.id}>
					<Card className="px-2 shadow-sm">
						<Card.Body className="d-flex flex-column justify-content-center align-items-center">
							<Image src={UserDefault} className="mb-2" roundedCircle style={{width: "6rem"}}/>
							<p className="fs-3 fw-bold mb-1">{user.name}</p>
							<span className={`mb-3 badge rounded-pill ${
											user.role.id === 0 ?
											'bg-primary' : user.role.id === 1 ? 'bg-success' : 'bg-warning'
							}`}>
								{user.role.name}
							</span>
							<div>
								<p className="m-0">Identificacion: <span className="fw-bold">{user.userId}</span></p>
								<p className="m-0">Tipo de Identificacion: <span className="fw-bold">{user.type_id.name}</span></p>
								<p className="m-0">Correo Electronico: <span className="fw-bold">{user.email}</span></p>
							</div>
						</Card.Body>
					</Card>
				</div>
			)) }
		</div>
  	)
}
