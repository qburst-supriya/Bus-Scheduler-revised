import '@/components/shared/tripSearch/style.scss';
import Form from '@/components/shared/form';
import { useFetchTrips } from '@/components/shared/tripSearch/hooks/fetchTripsHook';
import { ParamsType } from '@/components/shared/tripSearch/store/types';

type TripSearchType = {
    style: 'column' | 'row';
};
const TripSearch = ({ style }: TripSearchType) => {
    const setParams = useFetchTrips();

    return (
        <>
            <div className={`tripSearch-container ${style}`}>
                {style === 'column' && <h3>Online bus booking</h3>}
                <Form
                    style={style}
                    inputs={{ startPoint: 'string', endPoint: 'string', date: 'string' }}
                    buttonSubmit={(data: ParamsType) => {
                        setParams(data);
                    }}
                    fields={[
                        {
                            type: 'text',
                            placeholder: 'Start point',
                            name: 'startPoint',
                            options: {
                                required: true,
                            },
                        },
                        {
                            type: 'text',
                            placeholder: 'End point',
                            name: 'endPoint',
                            options: {
                                required: true,
                            },
                        },
                        {
                            type: 'date',
                            placeholder: '',
                            name: 'date',
                            options: {
                                required: true,
                            },
                        },
                        {
                            type: 'submit',
                            name: 'findTrip',
                            btnText: 'Find trip',
                        },
                    ]}
                ></Form>
            </div>
        </>
    );
};

export default TripSearch;
