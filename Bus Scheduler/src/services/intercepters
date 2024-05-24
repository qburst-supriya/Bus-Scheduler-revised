import { AxiosError } from "axios";
import { baseApi } from './api'
import { ApiErrorMessages } from './enums'

// Request interceptor
baseApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


// Response interceptor
baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {

    switch (error.response?.status) {
      case 404:
        console.error(ApiErrorMessages.NotFound);
        break;
      case 401:
        console.error(ApiErrorMessages.Unauthorized);
        break;
      default:
        Promise.reject(error);
    }
  },
);