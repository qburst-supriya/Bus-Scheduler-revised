import Image from '@/components/ui/image';
import logo from '@/assets/logo.png';
import '@/components/customComponents/logo/style.scss';
import Link from '@/components/ui/link';
const Logo = () => {
    return (
        <div className="logo-container">
            <Link url="/">
                <Image srcUrl={logo} altText="logo-icon"></Image>
            </Link>
        </div>
    );
};

export default Logo;
