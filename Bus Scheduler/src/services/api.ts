import axios from "axios";
import { baseApiUrl } from "./apiUrls";
import { AxiosError } from "axios";
import { ApiErrorMessages } from '@/services/enums'



const baseApi = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});



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
    return response?.data?.data
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



export default baseApi


