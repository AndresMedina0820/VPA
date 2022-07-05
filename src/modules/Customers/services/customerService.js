import { customersApi } from '../../../apis/customersApi';

export const getCustomers = async () => {
	console.log("getCustomers")
  	return await customersApi.get('/customers');
}

export const getOneCustomers = async (customer_id) => {
  return await customersApi.get(`/customers/${customer_id}`);
}

export const createCustomers = async (data) => {
  return await customersApi.post('/customers', data);
}

export const deleteCustomers = async (id) => {
  return await customersApi.delete('/customers/'+id)
}
