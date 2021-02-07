const axios = window.axios;
const BASE_API_URL = 'http://localhost:8000/api';

export default {
    getAllProducts: () => {
        axios.get(`${BASE_API_URL}/products`);
    }
}