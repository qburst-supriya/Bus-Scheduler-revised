import { ReactNode, FC } from 'react';

import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';
import './style.scss';

type FullScreenType = {
    children: ReactNode;
};
const FullScreen: FC<FullScreenType> = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className="content-container">{children}</div>
            <Footer></Footer>
        </>
    );
};

export default FullScreen;
