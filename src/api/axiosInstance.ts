import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:8001', // 你的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
