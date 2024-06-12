import { useEffect, useState } from 'react';

import { get } from '@/services/apiHandler'
import { tripDetailsApiUrl } from '@/services/apiUrls'

import { useCustomContext } from '@/store/contextProvider';
import { TripDetailsContext } from '@/components/features/tripList/components/tripDetails/store/tripDetailsContextProvider';
import { TripDetailsData } from '@/components/features/tripList/components/tripDetails/store/types';


type ResponseType =
    { trip: TripDetailsData }
export const useFetchTripDetails = () => {

    const { data, actions } = useCustomContext(TripDetailsContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);
    const [params, setParams] = useState<{
        busId
        :
        number

    }>();


    const updateTripDetailsStore = async () => {
        try {
            setIsLoading(true)
            const busId = params?.busId || 0;
            const response = await get(tripDetailsApiUrl(busId)) as ResponseType;
            actions.setTripDetailsData(response?.trip);
        } catch (errorResponse) {
            setIsLoading(false)
            setError(errorResponse as never)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        params?.busId && params?.busId > 0 && updateTripDetailsStore();

        setParams({
            busId
                : 0,
        });
    }, [params?.busId]);

    return { setParams, data, error, isLoading };
}