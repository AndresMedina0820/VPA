import { useState, useEffect } from 'react';
import { getBuses } from '../services/busesService';

export const useGetBuses = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            getBuses()
            .then((result) => {
                setBuses(result.data ? result.data : []);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {
        buses
    }
}
