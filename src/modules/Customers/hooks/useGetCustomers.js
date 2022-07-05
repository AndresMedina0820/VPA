import { useState, useEffect } from 'react';
import { getCustomers } from '../services/customerService';

export const useGetCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            getCustomers()
            .then((result) => {
                setCustomers(result.data ? result.data : []);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {
        customers
    }
}
