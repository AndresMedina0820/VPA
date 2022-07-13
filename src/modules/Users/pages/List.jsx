import { Fragment, useState } from 'react';
import { CardCustom } from "../../../styles/GlobalStyles";
import { SearchInput } from "../../../utilities/SearchInput";
import { ButtonNew } from "../../../utilities/ButtonNew";
import { useGetUsers } from '../hooks/useGetUsers';
import { CardDetails } from '../components/CardDetails';

export const Users = () => {
	const { users } = useGetUsers();
	const [filteredUsers, setFilteredUsers] = useState([]);

	return (
		<Fragment>
			<CardCustom className="pt-4 pb-2">
			<div className="row justify-content-center">
					<div className="col-6">
						<SearchInput data={users} setFilteredData={setFilteredUsers}/>
					</div>
					<div className="col text-end">
						<ButtonNew label={'Nuevo Usuario'} link={'/usuarios/nuevo'}/>
					</div>
				</div>
			</CardCustom>
			<CardDetails users={filteredUsers}/>
		</Fragment>
	)
}
