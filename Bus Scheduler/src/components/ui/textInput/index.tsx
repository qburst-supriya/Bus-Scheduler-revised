import '@/components/ui/textInput/style.scss';
export type InputProps = {
    type: string;
    placeholder?: string;
    value?: string;
    name: string;
    options?: object;
};

const TextInput = ({ type, placeholder, value, name, options }: InputProps) => {
    return <input type={type} placeholder={placeholder} value={value} name={name} {...options} />;
};

export default TextInput;
