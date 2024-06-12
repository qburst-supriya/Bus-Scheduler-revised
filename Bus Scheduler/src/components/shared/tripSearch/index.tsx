import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import '@/components/shared/tripSearch/style.scss';
import Form from '@/components/shared/form';
import { ParamsType } from '@/components/shared/tripSearch/store/types';
import { memo } from 'react';

type TripSearchType = {
    style: 'column' | 'row';
};

const TripSearch = ({ style }: TripSearchType) => {
    const navigate = useNavigate();
    const currentUrl = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const values: ParamsType = {
        startPoint: searchParams.get('startPoint') as string | '',
        endPoint: searchParams.get('endPoint') as string | '',
        date: searchParams.get('date') as string | '',
    };

    return (
        <>
            <div className={`tripSearch-container ${style}`}>
                {style === 'column' && <h3>Online bus booking</h3>}
                <Form<ParamsType>
                    style={style}
                    defaultData={values}
                    buttonSubmit={(data: ParamsType) => {
                        if (currentUrl.pathname === '/triplist') {
                            setSearchParams(data);
                            window.location.reload();
                        } else {
                            navigate({
                                pathname: '/triplist',
                                search: createSearchParams(data).toString(),
                            });
                        }
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

export default memo(TripSearch);
