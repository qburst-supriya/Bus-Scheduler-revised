import { useEffect } from 'react';
import { GET } from '../../../../services/api'
import { tripListApiUrl } from '../../../../services/apiUrls'

import { useCustomContext } from '../../../../store/contextProvider';
import { TripSearchContext } from '../store/tripSearchProvider';
import { TripListType } from '../store/types';
import { BaseContextDataType } from '../../../../store/types';

export const useFetchTrips = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    const updateTripListStore = async () => {
        const response: BaseContextDataType<TripListType> = await GET(tripListApiUrl);
        // response.then((response: BaseContextDataType<TripListType>) => {
        actions.listTrips(response);
        // })
    }

    useEffect(() => {
        // const fetchTrips = async (): Promise<BaseContextDataType<TripListType>> =>
        //     await GET(tripListApiUrl);
        // //
        // // updateTripListStore()
        // fetchTrips().then((response: BaseContextDataType<TripListType>) => {
        //     actions.listTrips(response);
        // })

        updateTripListStore();

    }, []);
    return data;
}