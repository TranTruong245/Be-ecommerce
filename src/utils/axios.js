import axios from 'axios';
require('dotenv').config();
const instance = axios.create({
	baseURL: process.env.BACKEND_URL,
});
instance.interceptors.response.use((response) => {
	return response.data;
});

export default instance;
