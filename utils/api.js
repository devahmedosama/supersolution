// services/api.js
import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get(`${base_url}api/settings`,{
            next:{
                revalidate:120
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
