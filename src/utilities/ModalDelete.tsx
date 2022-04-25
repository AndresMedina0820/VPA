import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { PropsModal } from '../models/Modal.model';

export const ModalDelete = ({title, description}:PropsModal) => {
  return (
	<Modal.Dialog>
		<Modal.Header closeButton>
			<Modal.Title>Modal title</Modal.Title>
		</Modal.Header>

		<Modal.Body>
			<p>Modal body text goes here.</p>
		</Modal.Body>

		<Modal.Footer>
			<Button variant="secondary">Close</Button>
			<Button variant="danger">
				<i className="bi bi-trash"></i>
				Eliminar
			</Button>
		</Modal.Footer>
	</Modal.Dialog>
  )
}
