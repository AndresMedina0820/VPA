import { useEffect } from "react";

export const SearchInput = ({customers, setFilteredCustomers}) => {
	useEffect(() => {
	  setFilteredCustomers(customers);
	}, [customers, setFilteredCustomers]);

	const handleFilter = (e) => {
		console.log(e)
		e.preventDefault()
		const value = e.target.value
		const filter = customers.filter(customer => customer.name.toLowerCase().includes(value.toLowerCase()))
		setFilteredCustomers(filter);
	}

	return (
		<input type="text" className="form-control w-25" placeholder="Buscar" onKeyUp={handleFilter}/>
	)
}
