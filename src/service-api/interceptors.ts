import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4400/api',
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
               
                const refreshResponse= await api.post('/update-tokens');

                const newAccessToken = refreshResponse.headers['authorization'];
                
               if(newAccessToken){
                window.localStorage.setItem('accessToken', newAccessToken);
               }
                       
                return api(originalRequest);
            } catch (errorRefreshToken) {
                console.error('Failed to refresh token:', errorRefreshToken);
                window.localStorage.clear(); 
                window.location.href = '/login'; 
                return Promise.reject(errorRefreshToken);
            }
        }

        return Promise.reject(error);
    }
);



export default api;


