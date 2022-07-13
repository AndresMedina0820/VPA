import { baseApi } from '../../../apis/baseApi';

export const getBuses = async () => {
  	return await baseApi.get('/buses');
}

export const getOneBuses = async (customer_id) => {
  return await baseApi.get(`/buses/${customer_id}`);
}

export const createBuses = async (data) => {
  return await baseApi.post('/buses', data);
}

export const deleteBuses = async (id) => {
  return await baseApi.delete('/buses/'+id)
}
