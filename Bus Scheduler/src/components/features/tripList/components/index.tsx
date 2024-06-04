import { FC, useState } from 'react';

import { TripSearchContextProvider } from '@/components/shared/tripSearch/store/tripSearchProvider';
import FullScreen from '@/components/layouts';

import '@/components/features/tripList/components/style.scss';
import Table, { ColumnType } from '@/components/ui/table';
import Button from '@/components/ui/button/Button';
import Modal from '@/components/ui/modal';
import TripSearch from '@/components/shared/tripSearch';
import { useFetchTripDetails } from '@/components/features/tripList/components/tripDetails/hooks/fetchTripDetailsHook';
import { TripDetailsContextProvider } from '@/components/features/tripList/components/tripDetails/store/tripDetailsContextProvider';

import SeatLayout from '@/components/features/tripList/components/seatLayout/index';

const TripList: FC = () => {
    return (
        <>
            <FullScreen>
                <TripSearchContextProvider>
                    <TripDetailsContextProvider>
                        <TripSearch style="row"></TripSearch>
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
    const Toggle = () => setModal(!modal);
    // const { data } = useCustomContext(TripSearchContext);
    const { setParams } = useFetchTripDetails();

    const data = {
        success: true,
        message: 'Fetched all trips',
        data: {
            trips: [
                {
                    id: 138,
                    createdAt: '2024-05-29T02:12:33.373Z',
                    updatedAt: '2024-05-29T12:46:11.000Z',
                    originId: 1,
                    destinationId: 2,
                    tripDate: '2024-05-29T18:30:00.000Z',
                    departure: '2024-05-30T06:52:56.000Z',
                    arrival: '2024-05-30T09:52:56.000Z',
                    durationInHours: '3',
                    busId: 'A1',
                    busType: 'AC',
                    seatType: 'Sleeper',
                    totalSeats: 44,
                    farePerSeat: '1000.00',
                    publish: false,
                    creatorId: null,
                    origin: {
                        id: 1,
                        createdAt: '2024-02-12T23:53:39.794Z',
                        updatedAt: '2024-03-21T14:48:08.941Z',
                        name: 'Kochi',
                        shortCode: 'COK',
                    },
                    destination: {
                        id: 2,
                        createdAt: '2024-02-13T00:24:59.337Z',
                        updatedAt: '2024-02-13T00:24:59.337Z',
                        name: 'Trivandrum',
                        shortCode: 'TRV',
                    },
                },
                {
                    id: 139,
                    createdAt: '2024-05-29T02:15:18.863Z',
                    updatedAt: '2024-05-29T02:15:18.863Z',
                    originId: 1,
                    destinationId: 2,
                    tripDate: '2024-05-29T18:30:00.000Z',
                    departure: '2024-05-30T06:52:56.000Z',
                    arrival: '2024-05-30T09:52:56.000Z',
                    durationInHours: '3',
                    busId: 'A11',
                    busType: 'AC',
                    seatType: 'Sleeper',
                    totalSeats: 45,
                    farePerSeat: '1000.00',
                    publish: false,
                    creatorId: null,
                    origin: {
                        id: 1,
                        createdAt: '2024-02-12T23:53:39.794Z',
                        updatedAt: '2024-03-21T14:48:08.941Z',
                        name: 'Kochi',
                        shortCode: 'COK',
                    },
                    destination: {
                        id: 2,
                        createdAt: '2024-02-13T00:24:59.337Z',
                        updatedAt: '2024-02-13T00:24:59.337Z',
                        name: 'Trivandrum',
                        shortCode: 'TRV',
                    },
                },
                {
                    id: 140,
                    createdAt: '2024-05-29T02:15:28.590Z',
                    updatedAt: '2024-05-29T02:15:28.590Z',
                    originId: 1,
                    destinationId: 2,
                    tripDate: '2024-05-29T18:30:00.000Z',
                    departure: '2024-05-30T06:52:56.000Z',
                    arrival: '2024-05-30T09:52:56.000Z',
                    durationInHours: '3',
                    busId: 'A111',
                    busType: 'AC',
                    seatType: 'Sleeper',
                    totalSeats: 45,
                    farePerSeat: '1000.00',
                    publish: false,
                    creatorId: null,
                    origin: {
                        id: 1,
                        createdAt: '2024-02-12T23:53:39.794Z',
                        updatedAt: '2024-03-21T14:48:08.941Z',
                        name: 'Kochi',
                        shortCode: 'COK',
                    },
                    destination: {
                        id: 2,
                        createdAt: '2024-02-13T00:24:59.337Z',
                        updatedAt: '2024-02-13T00:24:59.337Z',
                        name: 'Trivandrum',
                        shortCode: 'TRV',
                    },
                },
            ],
            resultCount: 3,
        },
    };
    const columns: ColumnType[] = [
        { key: 'busId', title: 'Bus name', width: '20%' },
        { key: 'id', title: 'Id', width: '20%' },
        { key: 'busType', title: 'Bus Type', width: '20%' },
        { key: 'seatType', title: 'Seat type', width: '20%' },
        {
            key: 'action',
            title: '',
            width: '20%',
            render: (row): JSX.Element => {
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
            <Table data={data?.data?.trips} columns={columns}></Table>
            <Modal show={modal} title="Click the below seats for seat allocation" close={Toggle}>
                <SeatLayout type="sleeper"></SeatLayout>
            </Modal>
        </>
    );
};
