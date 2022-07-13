import { createContext, useState } from 'react';

const ToastContext = createContext(false);

const ToastProvider = (props) => {
	const [openToast, setOpenToast] = useState(false)
	const [descriptionToast, setDescriptionToast] = useState('')
	const [iconToast, setIconToast] = useState('success')

	return (
		<ToastContext.Provider value={{
			openToast,
			setOpenToast,
			descriptionToast,
			setDescriptionToast,
			iconToast,
			setIconToast
		}}>
			{props.children}
		</ToastContext.Provider>
	)
}

export {ToastContext, ToastProvider}
