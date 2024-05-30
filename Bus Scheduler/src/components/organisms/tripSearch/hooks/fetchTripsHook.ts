import { useEffect } from 'react';
import { GET } from '@/services/api'
import { tripListApiUrl } from '@/services/apiUrls'

import { useCustomContext } from '@/store/contextProvider';
import { TripSearchContext } from '@/components/organisms/tripSearch/store/tripSearchProvider';
import { TripListType } from '@/components/organisms/tripSearch/store/types';
import { BaseContextDataType } from '@/store/types';

export const useFetchTrips = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    const updateTripListStore = async () => {
        const response: BaseContextDataType<TripListType> = await GET(tripListApiUrl);
        actions.listTrips(response);
    }

    useEffect(() => {
        updateTripListStore();
    }, []);
    return data;
}