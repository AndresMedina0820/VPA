import { useEffect, useState } from "react";

interface NewCustomer {
	id: String,
	type_id: Number,
	names: String,
	last_names: String,
	date_born: Date,
	email: String,
	phone: Number,
	city: String,
	address: String
}

export const useLocalStorage = () => {
	const [customer, setCustomer] = useState([]);

	useEffect(() => {
		const LOCAL_STORAGE = localStorage.getItem('Customers');
		let initial_value = [];
	
		if (!LOCAL_STORAGE) {
			localStorage.setItem('Customers', JSON.stringify([]));
		} else {
			initial_value = JSON.parse(LOCAL_STORAGE);
		}
	
		setCustomer(initial_value);
	}, []);

	const saveCustomer = (newCustomer:any) => {
		const ALL_CUSTOMER: String[] = [...customer];
		ALL_CUSTOMER.push(newCustomer);
		localStorage.setItem('Customers',JSON.stringify(ALL_CUSTOMER));
	};

	return {
		customer,
		saveCustomer
	}
}
