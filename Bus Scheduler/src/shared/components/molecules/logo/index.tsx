import Image from '@/shared/components/atoms/image';
import logo from '@/assets/logo.png';
import '@/shared/components/molecules/logo/style.scss';
import Link from '@/shared/components/atoms/link';
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
