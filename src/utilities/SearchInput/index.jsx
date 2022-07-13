import { useEffect } from 'react';
import { SearchInputStyle } from './SearchInputStyles';

export const SearchInput = ({data, setFilteredData, mod}) => {
	useEffect(() => {
		setFilteredData(data);
	}, [data, setFilteredData]);

	const handleFilter = (e) => {
		console.log(e)
		e.preventDefault()
		const value = e.target.value
		const filter = data.filter(item => {
			if (mod === 'buses') {
				return item.company.name.toLowerCase().includes(value.toLowerCase())
			} else {
				return item.name.toLowerCase().includes(value.toLowerCase())
			}
		});
		setFilteredData(filter);
	}

	return (
		<div className="input-group mb-3">
			<span className="input-group-text bg-white" id="basic-addon1">
				<i className="bi bi-search"></i>
			</span>
			<SearchInputStyle
				type="text"
				className="form-control w-25"
				placeholder="Buscar" aria-label="search"
				aria-describedby="basic-search"
				onKeyUp={handleFilter}
			/>
		</div>
	)
}
