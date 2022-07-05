import { useState, useEffect } from 'react';
import { createCustomers } from '../services/customerService';

export const usePostCustomers = (data: {}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            createCustomers(data)
            .then((result) => {
                console.log('result: ',result)
            });
        } catch (error) {
            console.error(error);
        }
    }, []);
}
