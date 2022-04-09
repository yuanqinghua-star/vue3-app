import axios from "axios";

let baseURL: string;

if (process.env.NODE_ENV == "development") {
  baseURL = "/api";
} else {
  baseURL = "/";
}

let service = axios.create({
  baseURL,
  timeout: 3 * 60 * 1000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if(response.status == 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service