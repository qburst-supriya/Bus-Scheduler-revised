import TripSearch from '../../components/tripSearch';
import { TripSearchContextProvider } from '../../components/tripSearch/store/tripSearchProvider';

const Home = () => {
    return (
        <TripSearchContextProvider>
            <TripSearch></TripSearch>
        </TripSearchContextProvider>
    );
};

export default Home;
