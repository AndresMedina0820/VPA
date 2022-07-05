import { baseApi } from '../../../apis/baseApi';

export const getUsers = async () => {
  	return await baseApi.get('/users');
}

export const getOneUsers = async (customer_id) => {
  return await baseApi.get(`/users/${customer_id}`);
}

export const createUsers = async (data) => {
  return await baseApi.post('/users', data);
}

export const deleteUsers = async (id) => {
  return await baseApi.delete('/users/'+id)
}
