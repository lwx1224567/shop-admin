import axios from "axios";
import { successMessage, errorMessage } from '~/composables/util'
import { getToken } from '~/composables/auth'

const instance = axios.create({
  baseURL:"/api",
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(
  response => response.data.data,
  error => {
    errorMessage(error)   // 这里才传 error 对象进去
    return Promise.reject(error)
  });

export default instance;