import { useEffect, useState } from 'react';

import { get } from '@/services/apiHandler'
import { tripListApiUrl } from '@/services/apiUrls'

import { useCustomContext } from '@/store/contextProvider';
import { TripSearchContext } from '@/components/shared/tripSearch/store/tripSearchProvider';
import { TripData } from '@/components/shared/tripSearch/store/types';

export const useFetchTrips = () => {

    const { data, actions } = useCustomContext(TripSearchContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);

    const updateTripListStore = async () => {
        try {
            setIsLoading(true)
            const response = await get<TripData>(tripListApiUrl) as TripData;
            actions.listTrips(response);
        } catch (errorResponse) {
            setIsLoading(false)
            setError(errorResponse as never)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        // can get the searchparamas from url using useSearchParams
        updateTripListStore();
    }, []);
    return { data, error, isLoading };
}