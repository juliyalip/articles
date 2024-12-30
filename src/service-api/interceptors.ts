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
                // Используем api для согласованности
                const refreshResponse = await api.post('/update-tokens');
                const newAccessToken = refreshResponse.headers['authorization'];
                
                // Сохраняем новый токен
                window.localStorage.setItem('accessToken', newAccessToken);

                // Обновляем заголовок и повторяем запрос
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (errorRefreshToken) {
                console.error('Failed to refresh token:', errorRefreshToken);
                window.localStorage.clear(); // Очищаем данные
                window.location.href = '/login'; // Перенаправляем пользователя
                return Promise.reject(errorRefreshToken);
            }
        }

        return Promise.reject(error);
    }
);



export default api;


