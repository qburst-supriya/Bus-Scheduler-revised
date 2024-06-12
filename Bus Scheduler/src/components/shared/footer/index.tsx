import '@/components/shared/footer/style.scss';
import '@/components/shared/footer';
import { COPY_RIGHT } from '@/components/shared/footer/constants';

const Footer = () => {
    return <div className="footer-container"> {COPY_RIGHT}</div>;
};

export default Footer;
