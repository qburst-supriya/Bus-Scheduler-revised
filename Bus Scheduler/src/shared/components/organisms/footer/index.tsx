import '@/shared/components/organisms/footer/style.scss';
import '@/shared/components/organisms/footer';
import { COPY_RIGHT } from './constants';

const Footer = () => {
    return <div className="footer-container"> {COPY_RIGHT}</div>;
};

export default Footer;
