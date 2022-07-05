
import { Link } from 'react-router-dom';

export const ButtonNew = ({label='Nuevo', link='/'}) => {
  return (
	<Link to={link}>
		<button className="btn btn-primary">
			<i className="bi bi-plus-lg"></i>
			{label}
		</button>
	</Link>
  )
}
