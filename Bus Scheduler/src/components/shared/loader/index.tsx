import Image from '@/components/ui/image';
import loader from '@/assets/loader.gif';
import '@/components/shared/loader/style.scss';
import { createPortal } from 'react-dom';

type LoaderProps = {
    shouldShow: boolean;
};

const Loader = ({ shouldShow }: LoaderProps) =>
    createPortal(
        <div className={`loader-container ${shouldShow ? 'show' : 'hide'}`}>
            <Image altText="loader" srcUrl={loader}></Image>
        </div>,
        document.getElementById('loader') as HTMLElement
    );

export default Loader;
