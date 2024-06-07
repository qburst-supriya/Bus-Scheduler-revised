import { FC } from 'react';

import TripSearch from '@/components/shared/tripSearch';
import { TripSearchContextProvider } from '@/components/shared/tripSearch/store/tripSearchProvider';
import FullScreen from '@/components/layouts';

import '@/components/features/home/components/style.scss';

const Home: FC = () => {
    return (
        <>
            <FullScreen>
                <div className="home-banner"></div>
                <TripSearchContextProvider>
                    <TripSearch style="row"></TripSearch>
                </TripSearchContextProvider>
                <div className="home-text-container">
                    <h4>Online Bus Booking Services</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="home-text-container">
                    <h4>Benefits of Booking Bus Tickets Online</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </FullScreen>
        </>
    );
};

export default Home;
