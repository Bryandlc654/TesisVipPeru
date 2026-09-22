import axios from 'axios';

const TOKEN_KEY = 'tesisvip_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
};

const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginRequest = (email, password) =>
  api.post('/auth/login', { email, password }).then((res) => res.data);

export const meRequest = () => api.get('/auth/me').then((res) => res.data);

export const fetchContent = (page = 'home') =>
  api.get(`/content/${page}`).then((res) => res.data);

export const saveContent = (page, data) =>
  api.put(`/content/${page}`, { data }).then((res) => res.data);

export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api
    .post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((res) => res.data);
};

export default api;
