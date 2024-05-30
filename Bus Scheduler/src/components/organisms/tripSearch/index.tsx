import { useNavigate } from 'react-router-dom';
import { useFetchTrips } from '@/components/organisms/tripSearch/hooks/fetchTripsHook';
import Button from '@/components/atoms/button/Button';

const TripSearch = () => {
    const navigate = useNavigate();
    const tripList = useFetchTrips();

    return (
        <>
            <Button type="button" btnText="Search" onClick={() => navigate('/triplist')}></Button>
        </>
    );
};

export default TripSearch;
