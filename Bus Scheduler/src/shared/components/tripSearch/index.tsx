import Table, { ColumnType } from '@/shared/components/atoms/table';
import { useFetchTrips } from '@/shared/components/tripSearch/hooks/fetchTripsHook';
import { TripListDataType } from './store/types';

const TripSearch = () => {
    const tripList = useFetchTrips();

    const columns: ColumnType[] = [
        { key: 'busId', title: 'Bus name', width: '30%' },
        { key: 'id', title: 'Id', width: '30%' },
        { key: 'busType', title: 'Bus Type', width: '30%' },
        { key: 'seatType', title: 'Seat type', width: '30%' },
    ];

    const data: TripListDataType[] = tripList.data.trips;

    return <Table data={data} columns={columns}></Table>;
};

export default TripSearch;
