import { useContext } from 'react';
import Swal from 'sweetalert2';
import { ToastContext } from '../../contexts/ToastContext'

export const Toast = () => {
	const { openToast, setOpenToast, descriptionToast, iconToast } = useContext(ToastContext)

	if (openToast) {
		const Toast = Swal.mixin({
			toast: true,
			position: 'bottom-end',
			showConfirmButton: false,
			timer: 5000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.addEventListener('mouseenter', Swal.stopTimer)
			  toast.addEventListener('mouseleave', Swal.resumeTimer)
			  setOpenToast(false);
			}
		});

		Toast.fire({
			icon: iconToast,
			title: descriptionToast
		})
	}
}
