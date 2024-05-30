import '@/components/atoms/input/style.scss';

export type InputType = {
    type: string;
    placeholder: string;
    value: string;
    onChange: () => void;
    name: string;
};

const Input = ({ type, placeholder, value, onChange, name }: InputType) => {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />;
};

export default Input;
