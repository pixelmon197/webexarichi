import axios from 'axios';

// Configuración base de la API
const api = axios.create({
  baseURL: 'http://18.117.157.132:3306', // Cambia esto por la URL de tu API en producción
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token de autenticación en los headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
