import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { AxiosResponseEx } from "../model/params";
import router from '../router'
import { errorCodeType } from "./error-doce-type";
import { getStore } from "./storage";

const service = axios.create({
  // API 前缀,请求接口时默认作为API 前缀
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// Loading 对象
// let loading:any 

// 正在请求的数量
// let requestCount = 0;

service.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  // 请求之前设置 token
  const token = getStore('token');
  if (token === null || token === '') {
    // 未登录，跳转到登录页面
    router.push('/login')
  }

  if (config.headers != null) {
    // 需要设置 token
    config.headers['Authorization'] = 'Bearer' + token;
  }

  // GET 请求转换 params 参数到 URL链接中
  if (config.method?.toUpperCase() === 'GET' && config.params) {
    let url = config.url + '?';
    // 遍历所有 Params 中的 KEY
    for (const propName of Object.keys(config.params)) {
      // 获取当前属性的值
      const value = config.params[propName];
      // enCode编码属性名称部分
      var part = encodeURIComponent(propName) + '=';
      // 值处理部分
      if (value !== null && typeof value !== 'undefined') {
        // 如果参数的值是对象的形式，需要做特殊处理
        if (typeof value === 'object') {
          // 遍历参数对象
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + '=';
            url += subPart + encodeURIComponent(value[key]) + '&';
          }
        } else {
          url += part + encodeURIComponent(value) + '&';
        }
      }
    }
    // 去掉尾部 & 符号
    url = url.slice(0, -1);
    // 已经将参数转换到 URL 路径中
    config.params = {};
    // 将拼接好的URL赋值到请求cofig.url 中
    config.url = url;
    console.log(url);
  }
  return config;
}, (error) => {
  Promise.reject(error);
});
// 响应拦截器
service.interceptors.response.use(
  (res) => {
  // 取状态码
  const code = res.status;
  // 获取错误信息
  const msg = res.data['message'] || errorCodeType(code.toString()) || res.data['msg'] || errorCodeType('default');

  if (code === 200) {
    return Promise.resolve(res.data as AxiosResponseEx);
  } else if (code === 401) {
    ElMessage.error('需要登录');
    return Promise.reject(res.data);
  } else {
    ElMessage.error(msg);
    return Promise.reject(res.data)
  }
  },
  // 错误处理
  (error) => {
    let { message } = error;
    if (message === 'Network Error') {
      message = '网络似乎遇到了问题，请检查网络连接状况';
    } else if (message.includes('timeout')) {
      return Promise.reject(error);
    } else if (message.includes('401')) {
      return Promise.reject(error);
      // message = '您尚未登录系统';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    ElMessage.error({ message, duration: 5 * 1000 });
    return Promise.reject(error);
  })
export default service;