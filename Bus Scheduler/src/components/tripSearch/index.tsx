import { useEffect } from 'react';
import { useCustomContext } from '../../store/contextProvider';
import { TripSearchContext } from './store/tripSearchProvider';

const TripSearch = () => {
    const { data, actions } = useCustomContext(TripSearchContext);

    useEffect(() => {
        actions.listTrips({ data: { resultCount: 4, trips: [], message: '', success: false } });
    }, []);
    console.log(data);
    return <>{data?.data?.resultCount}</>;
};

export default TripSearch;
