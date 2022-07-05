import { useState, useEffect } from 'react';
import { deleteCustomers } from '../services/customerService';

export const useDeleteCustomers = (id) => {
    const [status, setStatus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            deleteCustomers(id)
            .then((result) => {
                console.log(result)
                // setStatus(result.data);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {
        status
    }
}
