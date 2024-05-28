import Header from '@/shared/components/organisms/header';
import Footer from '@/shared/components/organisms/footer';
import TripSearch from '@/shared/components/tripSearch';
import { TripSearchContextProvider } from '@/shared/components/tripSearch/store/tripSearchProvider';

import './style.scss';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="content-container">
                <TripSearchContextProvider>
                    <TripSearch></TripSearch>
                </TripSearchContextProvider>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
