import { FC, useState } from 'react';

import { TripSearchContextProvider } from '@/components/shared/tripSearch/store/tripSearchProvider';
import FullScreen from '@/components/layouts';
import { useFetchTrips } from '@/components/shared/tripSearch/hooks/fetchTrips';

import '@/components/features/tripList/components/style.scss';
import Table, { ColumnType } from '@/components/ui/table';
import Button from '@/components/ui/button/Button';
import Modal from '@/components/ui/modal';
import TripSearch from '@/components/shared/tripSearch';
import { useFetchTripDetails } from '@/components/features/tripList/components/tripDetails/hooks/fetchTripDetails';
import { TripDetailsContextProvider } from '@/components/features/tripList/components/tripDetails/store/tripDetailsContextProvider';

import SeatLayout from '@/components/features/tripList/components/seatLayout/index';
import { TripListData } from '@/components/shared/tripSearch/store/types';
import Loader from '@/components/shared/loader';

const TripList: FC = () => {
    return (
        <>
            <FullScreen>
                <TripSearchContextProvider>
                    <TripDetailsContextProvider>
                        <WithData></WithData>
                    </TripDetailsContextProvider>
                </TripSearchContextProvider>
            </FullScreen>
        </>
    );
};

export default TripList;

const WithData = () => {
    const [modal, setModal] = useState(false);
    const { data, isLoading: isTripListLoading } = useFetchTrips();
    const { setParams, isLoading: isTripDetailsLoading } = useFetchTripDetails();

    const Toggle = () => setModal(!modal);

    const columns: ColumnType<TripListData>[] = [
        { key: 'busId', title: 'Bus name', width: '20%' },
        { key: 'id', title: 'Id', width: '20%' },
        { key: 'busType', title: 'Bus Type', width: '20%' },
        { key: 'seatType', title: 'Seat type', width: '20%' },
        {
            key: 'action',
            title: '',
            width: '20%',
            render: (row: TripListData): JSX.Element => {
                return (
                    <Button
                        type="button"
                        btnText="Book Now"
                        onClick={() => {
                            setParams({ busId: row.id });
                            Toggle();
                        }}
                    ></Button>
                );
            },
        },
    ];
    return (
        <>
            <TripSearch style="row"></TripSearch>
            {(isTripListLoading || isTripDetailsLoading) && <Loader shouldShow={isTripListLoading}></Loader>}
            {data.trips && <Table data={data.trips} columns={columns}></Table>}
            <Modal show={modal} title="Click the below seats for seat allocation" close={Toggle}>
                <SeatLayout type="sleeper"></SeatLayout>
            </Modal>
        </>
    );
};
