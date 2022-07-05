import { baseApi } from '../../../apis/baseApi';

export const getCustomers = async () => {
	console.log("getCustomers")
  	return await baseApi.get('/customers');
}

export const getOneCustomers = async (customer_id) => {
  return await baseApi.get(`/customers/${customer_id}`);
}

export const createCustomers = async (data) => {
  return await baseApi.post('/customers', data);
}

export const deleteCustomers = async (id) => {
  return await baseApi.delete('/customers/'+id)
}
