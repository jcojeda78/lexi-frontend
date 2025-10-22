import axios from 'axios';
import { apiConfig } from '../config/apiKeys';

// Configurar base URL desde variables de entorno
const API_BASE_URL = apiConfig.backendUrl;

// Crear instancia de axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token de autenticación
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Servicios de API
export const apiService = {
  // Autenticación
  auth: {
    login: (credentials) => api.post('/api/auth/login', credentials),
    register: (userData) => api.post('/api/auth/register', userData),
    logout: () => api.post('/api/auth/logout'),
    getProfile: () => api.get('/api/auth/profile'),
  },

  // Leads
  leads: {
    create: (leadData) => api.post('/api/leads/', leadData),
    getAll: () => api.get('/api/leads/'),
  },

  // Contenido
  content: {
    getTestimonials: () => api.get('/api/content/testimonials'),
    getFAQs: () => api.get('/api/content/faq'),
    getPricing: () => api.get('/api/content/pricing'),
  },

  // Contacto
  contact: {
    send: (contactData) => api.post('/api/contact/', contactData),
    getAll: () => api.get('/api/contact/'),
  },

  // Analytics
  analytics: {
    getStats: () => api.get('/api/analytics/stats'),
    trackEvent: (eventData) => api.post('/api/analytics/track', eventData),
  },
};

export default api;
