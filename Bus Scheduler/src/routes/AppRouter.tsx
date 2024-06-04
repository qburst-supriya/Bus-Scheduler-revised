import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@/components/features/home/components';
import TripList from '@/components/features/tripList/components';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="triplist" element={<TripList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
