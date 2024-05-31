import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GET } from '@/services/api'
import { tripListApiUrl } from '@/services/apiUrls'

import { useCustomContext } from '@/store/contextProvider';
import { TripSearchContext } from '@/components/organisms/tripSearch/store/tripSearchProvider';
import { TripDataType } from '@/components/organisms/tripSearch/store/types';

export const useFetchTrips = () => {
    const navigate = useNavigate();

    const { actions } = useCustomContext(TripSearchContext);
    const [params, setParams] = useState<{
        date
        :
        string
        endPoint
        :
        string
        startPoint
        :
        string
    } | null>(null);


    const updateTripListStore = async () => {
        const response: TripDataType = await GET(tripListApiUrl);
        actions.listTrips(response);
        navigate('/triplist');

    }

    useEffect(() => {
        params?.date && updateTripListStore();
        setParams({
            date
                : '',
            endPoint
                :
                '',
            startPoint: ''
        });
    }, [params?.date]);
    return setParams;
}