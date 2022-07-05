import axios from 'axios';

export const customersApi = axios.create({
    // baseURL: 'https://vpa-back.herokuapp.com/api/v1'
    baseURL: 'http://localhost:3004/api/v1'
});