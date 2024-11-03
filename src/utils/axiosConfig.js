/*
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-03 11:34:32
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-03 11:37:28
 */
// src/axios.js
import axios from 'axios';

// 创建 Axios 实例
const axiosInstance = axios.create({
    baseURL: 'https://localhost:8080/api', // 替换为你的接口域名
    timeout: 10000, // 可选，设置请求超时
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 可以在这里做一些请求前的处理，比如添加 Authorization 头
        // config.headers['Authorization'] = 'Bearer token';
        return config;
    },
    error => {
        // 如果请求错误则返回一个 Promise
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        // 可以在这里对响应数据做一些处理
        return response;
    },
    error => {
        // 对响应错误做些处理
        return Promise.reject(error);
    }
);

export default axiosInstance;
