import { FC, useState } from 'react';

import { TripSearchContext, TripSearchContextProvider } from '@/components/organisms/tripSearch/store/tripSearchProvider';
import FullScreen from '@/components/templates';

import './style.scss';
import { useCustomContext } from '@/store/contextProvider';
import Table, { ColumnType } from '@/components/atoms/table';
import Button from '@/components/atoms/button/Button';
import { TripListDataType } from '@/components/organisms/tripSearch/store/types';
import Modal from '@/components/atoms/modal';

const TripList: FC = () => {
    return (
        <>
            <FullScreen>
                <TripSearchContextProvider>
                    <WithData></WithData>
                </TripSearchContextProvider>
            </FullScreen>
        </>
    );
};

export default TripList;

const WithData = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    const tripList = useCustomContext(TripSearchContext);
    const data: TripListDataType[] = tripList.data.data.trips;

    const columns: ColumnType[] = [
        { key: 'busId', title: 'Bus name', width: '30%' },
        { key: 'id', title: 'Id', width: '30%' },
        { key: 'busType', title: 'Bus Type', width: '30%' },
        { key: 'seatType', title: 'Seat type', width: '30%' },
        {
            key: 'action',
            title: '',
            width: '30%',
            render: (row) => {
                return <Button type="button" btnText="Book" onClick={() => Toggle()}></Button>;
            },
        },
    ];
    return (
        <>
            <Table data={data} columns={columns}></Table>
            <Modal show={modal} title="My Modal" close={Toggle}>
                This is Modal content
            </Modal>
        </>
    );
};
