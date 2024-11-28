// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Your mock backend URL

export const adminLogin = async (email, password) => {
  const response = await axios.post(`${API_URL}/admin/login`, { email, password });
  return response.data;
};

export const instituteLogin = async (email, password) => {
  const response = await axios.post(`${API_URL}/institute/login`, { email, password });
  return response.data;
};

export const studentLogin = async (email, password) => {
  const response = await axios.post(`${API_URL}/student/login`, { email, password });
  return response.data;
};
