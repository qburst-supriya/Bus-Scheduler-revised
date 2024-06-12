import { ReactNode, FC } from 'react';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import '@/components/layouts/style.scss';

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
