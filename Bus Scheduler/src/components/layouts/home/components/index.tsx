import { FC } from 'react';

import TripSearch from '@/components/organisms/tripSearch';
import { TripSearchContextProvider } from '@/components/organisms/tripSearch/store/tripSearchProvider';
import FullScreen from '@/components/templates';

import './style.scss';

const Home: FC = () => {
    return (
        <>
            <FullScreen>
                <TripSearchContextProvider>
                    <TripSearch></TripSearch>
                </TripSearchContextProvider>
            </FullScreen>
        </>
    );
};

export default Home;
