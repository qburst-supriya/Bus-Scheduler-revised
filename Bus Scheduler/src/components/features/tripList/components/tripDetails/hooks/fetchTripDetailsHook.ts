import { useEffect, useState } from 'react';

import { GET } from '@/services/api'
import { tripDetailsApiUrl } from '@/services/apiUrls'

import { useCustomContext } from '@/store/contextProvider';
import { TripDetailsContext } from '@/components/features/tripList/components/tripDetails/store/tripDetailsContextProvider';
import { TripDetailsDataType } from '@/components/features/tripList/components/tripDetails/store/types';

export const useFetchTripDetails = () => {

    const { data, actions } = useCustomContext(TripDetailsContext);
    const [params, setParams] = useState<{
        busId
        :
        string

    } | null>(null);


    const updateTripDetailsStore = async () => {
        const response: TripDetailsDataType = await GET(tripDetailsApiUrl(params?.busId));
        actions.setTripDetailsData(response);

    }

    useEffect(() => {
        params?.busId && updateTripDetailsStore();

        setParams({
            busId
                : "",
        });
    }, [params?.busId]);

    return { setParams, data };
}