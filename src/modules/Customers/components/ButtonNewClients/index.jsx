import { Link } from 'react-router-dom';

export const ButtonNewClients = () => {
  return (
	<Link to="/clientes/nuevo">
		<button className="btn btn-primary">
			<i className="bi bi-plus-lg"></i>
			Nuevo Cliente
		</button>
	</Link>
  )
}
