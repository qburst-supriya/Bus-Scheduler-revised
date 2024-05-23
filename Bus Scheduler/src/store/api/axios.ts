import axios, { AxiosError } from "axios";
import { baseApiUrl } from "./urls";


const baseApi = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const GET = <T>(url: string): Promise<T> => {

  const response: Promise<T> = baseApi.get(url)
    .then(response => {
      const responseData: T = response?.data
      return responseData
    })
  return response;

}

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

enum ApiErrorMessages {
  NotFound = 'The requested resource was not found.',
  Unauthorized = 'You do not have the necessary permissions.'
}


