import { Fragment, useState } from "react";
import { CardCustom } from '../../../styles/GlobalStyles';
import { SearchInput } from '../components/SearchInput';
import { ButtonNewClients } from '../components/ButtonNewClients';
import { TableList } from '../components/TableList';
import { useGetCustomers } from '../hooks/useGetCustomers';


export const Customers = () => {
	const { customers } = useGetCustomers();
	const [filteredCustomers, setFilteredCustomers] = useState([]);

	return (
		<Fragment>
			<CardCustom>
				<div className="px-3 d-flex justify-content-between">
					<SearchInput customers={customers} setFilteredCustomers={setFilteredCustomers}/>
					<ButtonNewClients />
				</div>
				<hr />
				<CardCustom.Body>
					<TableList customers={filteredCustomers}/>
				</CardCustom.Body>
			</CardCustom>
			<p className="fw-bold">Pagina 1/20</p>
		</Fragment>
	)
}
