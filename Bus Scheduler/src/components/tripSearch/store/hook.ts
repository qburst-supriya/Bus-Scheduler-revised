import { useEffect } from 'react';
import { GET } from '../../../store/api/axios'
import { tripListApiUrl } from '../../../store/api/urls'

import { useCustomContext } from '../../../store/contextProvider';
import { TripSearchContext } from './tripSearchProvider';

export const useFetchTrips = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    useEffect(() => {
        const fetchTrips = async () => {
            const response = await GET(tripListApiUrl);
            return response;
        }
        const tripList = fetchTrips();

        tripList.then((response) => {
            actions.listTrips({ data: response });
        })

    }, []);
    return data;
}