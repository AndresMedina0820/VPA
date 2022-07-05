import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';

// Components
import { Layout } from '../layouts/Layout';
import { Customers } from '../modules/Customers/pages/List';
import { FormCustomers } from '../modules/Customers/pages/FormCustomers';
import { Users } from '../pages/Users/components/List';
import { FormUsers } from '../pages/Users/components/FormUsers';
import { Buses } from '../pages/Buses/components/List';
import { FormBuses } from '../pages/Buses/components/FormBuses';
import { Travels } from '../pages/Travels/components/Travels';
import { FormTravels } from '../pages/Travels/components/FormTravels';

function App() {
	return (
		<>
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
					<Route path='/buses' element={<Buses />} />
					<Route path='/buses/nuevo' element={<FormBuses />} />
					<Route path='/viajes' element={<Travels />} />
					<Route path='/viajes/nuevo' element={<FormTravels />} />
				</Routes>
			</Layout>
		</BrowserRouter>
		</>
	);
}

export default App;
