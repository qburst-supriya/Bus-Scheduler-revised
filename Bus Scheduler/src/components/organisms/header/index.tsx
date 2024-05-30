import InputWithIcon from '@/components/molecules/inputWithIcon';
import Link from '../../atoms/link';
import Logo from '@/components/molecules/logo';
import { HELP_TEXT } from './constants';
import '@/components/organisms/header/style.scss';

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
