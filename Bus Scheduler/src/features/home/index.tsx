import TripSearch from '@/shared/components/tripSearch';
import { TripSearchContextProvider } from '../../shared/components/tripSearch/store/tripSearchProvider';

const Home = () => {
    return (
        <TripSearchContextProvider>
            <TripSearch></TripSearch>
        </TripSearchContextProvider>
    );
};

export default Home;
