import { Fragment, useState } from "react";
import { CardCustom } from '../../../styles/GlobalStyles';
import { SearchInput } from '../../../utilities/SearchInput';
import { ButtonNew } from '../../../utilities/ButtonNew';
import { TableList } from '../components/TableList';
import { useGetCustomers } from '../hooks/useGetCustomers';


export const Customers = () => {
	const { customers } = useGetCustomers();
	const [filteredCustomers, setFilteredCustomers] = useState([]);

	return (
		<Fragment>
			<CardCustom>
				<div className="row justify-content-center">
					<div className="col-10">
						<SearchInput data={customers} setFilteredData={setFilteredCustomers}/>
					</div>
					<div className="col-2 text-center">
						<ButtonNew label={'Nuevo Cliente'} link={'/clientes/nuevo'}/>
					</div>
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
