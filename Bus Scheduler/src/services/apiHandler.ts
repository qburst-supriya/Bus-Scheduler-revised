import baseApi from '@/services/api'
import { AxiosResponse } from 'axios';


export const get = <T>(url: string): Promise<T | AxiosResponse<T>> =>
    baseApi.get(url)
        .then(response => { return response }
        )

