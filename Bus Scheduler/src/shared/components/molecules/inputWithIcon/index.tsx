import '@/shared/components/atoms/input/style.scss';
import '@/shared/components/atoms/input';
import Input, { InputType } from '@/shared/components/atoms/input';
import '@/shared/components/molecules/inputWithIcon/style.scss';

const InputWithIcon = ({ type, placeholder, value, onChange, name }: InputType) => {
    const setIcon = (type: string) => {
        switch (type) {
            case 'search':
                return 'fa fa-search';
                break;

            default:
                return '';
        }
    };
    return (
        <div className="inputWithIcon-container">
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name}></Input>
            <i className={setIcon(type)}></i>
        </div>
    );
};

export default InputWithIcon;
