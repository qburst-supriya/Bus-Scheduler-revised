import { useEffect } from 'react';
import { GET } from '../../../store/api/axios'
import { tripListApiUrl } from '../../../store/api/urls'

import { useCustomContext } from '../../../store/contextProvider';
import { TripSearchContext } from './tripSearchProvider';
import { TripListType } from './types';
import { BaseContextDataType } from '../../../store/types';

export const useFetchTrips = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    useEffect(() => {
        const fetchTrips = async () => {
            const response: BaseContextDataType<TripListType> = await GET(tripListApiUrl);
            return response;
        }
        const tripList = fetchTrips();

        tripList.then((response) => {
            actions.listTrips(response);
        })

    }, []);
    return data;
}