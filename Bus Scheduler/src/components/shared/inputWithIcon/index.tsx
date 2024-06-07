import '@/components/ui/textInput/style.scss';
import TextInput, { InputProps } from '@/components/ui/textInput';
import '@/components/shared/inputWithIcon/style.scss';

const InputWithIcon = ({ type, placeholder, value, options, name }: InputProps) => {
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
            <TextInput type={type} placeholder={placeholder} value={value} options={{ ...options }} name={name}></TextInput>
            <i className={setIcon(type)}></i>
        </div>
    );
};

export default InputWithIcon;
