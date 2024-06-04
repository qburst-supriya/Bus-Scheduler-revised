import '@/components/ui/input/style.scss';
import '@/components/ui/input';
import Input, { InputProps } from '@/components/ui/input';
import '@/components/customComponents/inputWithIcon/style.scss';

const InputWithIcon = ({ type, placeholder, value, onChange, name }: InputProps) => {
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
