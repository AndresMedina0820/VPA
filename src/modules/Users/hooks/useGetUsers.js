import { useState, useEffect } from 'react';
import { getUsers } from '../services/customerService';

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            getUsers()
            .then((result) => {
                setUsers(result.data ? result.data : []);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {
        users
    }
}
