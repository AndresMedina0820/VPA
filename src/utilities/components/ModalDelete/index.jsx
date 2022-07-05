import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";

export const ModalDelete = ({title, description, openModal, setOpenModal, service, customer}) => {
	console.log("DATA: ", customer)
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
		  toast.addEventListener('mouseenter', Swal.stopTimer)
		  toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	const onSubmit = () => {
		service(customer.id)
		.then((result) => {
			if (result.status === 201) {
				console.log(result);
				Toast.fire({
					icon: 'success',
					title: 'Signed in successfully'
				});

			}
		});
	}

	return (
		<Modal show={openModal ? true : false} onHide={() => {setOpenModal(false)}} className="text-danger">
			<Modal.Header closeButton>
				<Modal.Title>Eliminar {title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{description}</p>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-secondary" onClick={() => {setOpenModal(false)}}>Cancelar</button>
				<button className="btn btn-danger" onClick={onSubmit}>
					<i className="bi bi-trash"></i>
					Eliminar
				</button>
			</Modal.Footer>
		</Modal>
	)
}
