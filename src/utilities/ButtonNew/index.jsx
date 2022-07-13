
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ButtonNew = ({label='Nuevo', link='/'}) => {
  return (
	<Link to={link}>
		<button className="btn btn-primary">
			<FontAwesomeIcon icon={faPlus} className="me-1"/>
			{label}
		</button>
	</Link>
  )
}
