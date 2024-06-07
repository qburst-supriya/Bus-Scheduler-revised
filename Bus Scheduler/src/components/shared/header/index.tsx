import TextInputWithIcon from '@/components/shared/inputWithIcon';
import Link from '@/components/ui/link';
import Logo from '@/components/shared/logo';
import { HELP_TEXT } from '@/components/shared/header/constants';
import '@/components/shared/header/style.scss';

const Header = () => {
    return (
        <div className="header-container">
            <Logo></Logo>
            <div className="header-right">
                <TextInputWithIcon type="search" placeholder="Search" name="Search" value="" options={{ onChange: () => {} }}></TextInputWithIcon>
                <Link url="#" text={HELP_TEXT}></Link>
            </div>
        </div>
    );
};

export default Header;
