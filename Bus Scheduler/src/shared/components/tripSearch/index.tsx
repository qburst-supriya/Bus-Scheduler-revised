import { useFetchTrips } from './hooks/fetchTripsHook';

const TripSearch = () => {
    const tripList = useFetchTrips();
    return (
        <>
            {`Count: ${tripList?.data?.resultCount}`}
            {tripList.data?.trips.map((trip) => (
                <li key={trip.id}> {`Bus Id ${trip.busId}`} </li>
            ))}
        </>
    );
};

export default TripSearch;
