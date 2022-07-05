import { useState, useEffect } from 'react';
import { getOneCustomers } from '../services/customerService';

export const useGetOneCustomers = ({ id }: any) => {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            getOneCustomers(parseInt(id))
            .then((result) => {
                setCustomer(result.data ? result.data : []);
            });
        } catch (error) {
            console.error(error);
        }
    });

    return {
        customer
    }
}
