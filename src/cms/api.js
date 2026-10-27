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

export const fetchPosts = (params = {}) =>
  api.get('/blog/posts', { params }).then((res) => res.data);

export const fetchPost = (slug) =>
  api.get(`/blog/posts/${encodeURIComponent(slug)}`).then((res) => res.data);

export const createPost = (data) =>
  api.post('/blog/posts', data).then((res) => res.data);

export const updatePost = (slug, data) =>
  api.put(`/blog/posts/${encodeURIComponent(slug)}`, data).then((res) => res.data);

export const deletePost = (slug) =>
  api.delete(`/blog/posts/${encodeURIComponent(slug)}`).then((res) => res.data);

export const createComplaint = (data) =>
  api.post('/complaints', data).then((res) => res.data);

export const fetchComplaints = (params = {}) =>
  api.get('/complaints', { params }).then((res) => res.data);

export const fetchComplaint = (id) =>
  api.get(`/complaints/${encodeURIComponent(id)}`).then((res) => res.data);

export const updateComplaint = (id, data) =>
  api.patch(`/complaints/${encodeURIComponent(id)}`, data).then((res) => res.data);

export const deleteComplaint = (id) =>
  api.delete(`/complaints/${encodeURIComponent(id)}`).then((res) => res.data);

export default api;
