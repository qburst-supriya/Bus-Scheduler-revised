import axios from "axios";
import { baseApiUrl } from "./apiUrls";


export const baseApi = axios.create({
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





