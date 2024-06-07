import TextInput, { InputProps } from '@/components/ui/textInput';

const FormInput = ({ type, placeholder, value, name, options }: InputProps) => {
    return <TextInput type={type} placeholder={placeholder} value={value} options={{ ...options }} name={name}></TextInput>;
};

export default FormInput;
