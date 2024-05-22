import { useEffect } from 'react';
import { useCustomContext } from '../../store/customContextHook';
import { TripSearchContext } from './store/tripSearchProvider';

const TripSearch = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    useEffect(() => {
        actions.listTrips({ resultCount: 4, trips: [], message: '', success: false });
    }, []);
    console.log(data.data);
    return (
        <>
            {data?.data?.resultCount}
            {data?.data?.data?.data?.resultCount}
        </>
    );
};

export default TripSearch;
