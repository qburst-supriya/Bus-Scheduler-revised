import InputWithIcon from '@/components/customComponents/inputWithIcon';
import Link from '@/components/ui/link';
import Logo from '@/components/customComponents/logo';
import { HELP_TEXT } from '@/components/shared/header/constants';
import '@/components/shared/header/style.scss';

const Header = () => {
    return (
        <div className="header-container">
            <Logo></Logo>
            <div className="header-right">
                <InputWithIcon type="search" placeholder="Search" name="Search" value="" onChange={() => {}}></InputWithIcon>
                <Link url="#" text={HELP_TEXT}></Link>
            </div>
        </div>
    );
};

export default Header;
