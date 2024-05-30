import Image from '@/components/atoms/image';
import logo from '@/assets/logo.png';
import '@/components/molecules/logo/style.scss';
import Link from '@/components/atoms/link';
const Logo = () => {
    return (
        <div className="logo-container">
            <Link url="#">
                <Image srcUrl={logo} altText="logo-icon"></Image>
            </Link>
        </div>
    );
};

export default Logo;
