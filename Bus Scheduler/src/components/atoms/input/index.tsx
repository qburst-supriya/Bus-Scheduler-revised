import '@/components/atoms/input/style.scss';
import { forwardRef } from 'react';
export type InputType = {
    type: string;
    placeholder?: string;
    value?: string;
    onChange: () => void;
    name: string;
    ref?: React.ForwardedRef<HTMLInputElement | null>;
    onBlur?: () => void;
};

const Input = forwardRef(({ type, placeholder, value, onChange, name }: InputType, ref) => (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} ref={ref} />
));

export default Input;
