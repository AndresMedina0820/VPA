import { Fragment, useState } from 'react';
import {CardCustom} from '../../../styles/GlobalStyles';
import { TableList } from '../components/TableList';
import { useGetBuses } from '../hooks/useGetBuses';
import { SearchInput } from '../../../utilities/SearchInput';
import { ButtonNew } from '../../../utilities/ButtonNew';

export const Buses = () => {
	const { buses } = useGetBuses();
	const [filteredBuses, setFilteredBuses] = useState(buses);
	console.log("customers", buses)

	return (
		<Fragment>
			<CardCustom>
				<div className="row justify-content-center">
					<div className="col-6">
						<SearchInput data={buses} setFilteredData={setFilteredBuses} mod={'buses'}/>
					</div>
					<div className="col text-end">
						<ButtonNew label={'Nuevo Bus'} link={'/buses/nuevo'}/>
					</div>
				</div>
				<hr />
				<CardCustom.Body>
					<TableList buses={filteredBuses}/>
				</CardCustom.Body>
			</CardCustom>
		</Fragment>
	)
}
