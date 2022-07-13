import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';

// Components
import { Layout } from '../layouts';
import { Customers } from '../modules/Customers/pages/List';
import { FormCustomers } from '../modules/Customers/pages/FormCustomers';
import { Users } from '../modules/Users/pages/List';
import { FormUsers } from '../modules/Users/pages/FormUsers';
import { Buses } from '../modules/Buses/pages/List';
import { FormBuses } from '../modules/Buses/pages/FormBuses';
import { Travels } from '../modules/Travels/pages/Travels';
import { FormTravels } from '../modules/Travels/pages/FormTravels';
import { Toast } from '../utilities/Toast';
import { ToastProvider } from '../contexts/ToastContext';

function App() {
	return (
		<ToastProvider>
			<GlobalStyles />
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Customers />} />
						<Route path='/clientes' element={<Customers />} />
						<Route path="/clientes/nuevo" element={<FormCustomers />} />
						<Route path="/clientes/:customer_id" element={<FormCustomers />} />
						<Route path='/usuarios' element={<Users />} />
						<Route path="/usuarios/nuevo" element={<FormUsers />} />
						<Route path="/usuarios/:user_id" element={<FormUsers />} />
						<Route path='/buses' element={<Buses />} />
						<Route path='/buses/nuevo' element={<FormBuses />} />
						<Route path='/viajes' element={<Travels />} />
						<Route path='/viajes/nuevo' element={<FormTravels />} />
					</Routes>
				</Layout>
			</BrowserRouter>
			<Toast />
		</ ToastProvider>
	);
}

export default App;
