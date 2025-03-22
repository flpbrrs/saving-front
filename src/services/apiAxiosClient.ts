import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL!
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);

export default api