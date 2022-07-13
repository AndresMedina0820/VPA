import { useState, useEffect } from 'react';
import { getOneCustomers } from '../services/customerService';

export const useGetOneCustomers = (id) => {
	console.log('id: ', id)
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            getOneCustomers(id)
            .then((result) => {
                setCustomer(result.data ? result.data : []);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {
        customer
    }
}
