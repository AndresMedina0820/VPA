import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { Layout } from '../containers/Layout/Layout';
import { Customers } from '../pages/Customers/components/List';
import { FormCustomers } from '../pages/Customers/components/FormCustomers';
import { Users } from '../pages/Users/components/List';
import { FormUsers } from '../pages/Users/components/FormUsers';
import { Buses } from '../pages/Buses/components/List';
import { FormBuses } from '../pages/Buses/components/FormBuses';
import { Travels } from '../pages/Travels/components/Travels';
import { FormTravels } from '../pages/Travels/components/FormTravels';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Customers />} />
					<Route path='/clientes' element={<Customers />} />
					<Route path="/clientes/nuevo" element={<FormCustomers />} />
					<Route path='/usuarios' element={<Users />} />
					<Route path="/usuarios/nuevo" element={<FormUsers />} />
					<Route path='/buses' element={<Buses />} />
					<Route path='/buses/nuevo' element={<FormBuses />} />
					<Route path='/viajes' element={<Travels />} />
					<Route path='/viajes/nuevo' element={<FormTravels />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
