import '@/components/ui/input/style.scss';
import { forwardRef } from 'react';
export type InputProps = {
    type: string;
    placeholder?: string;
    value?: string;
    onChange: () => void;
    name: string;
    ref?: React.ForwardedRef<HTMLInputElement | null>;
    onBlur?: () => void;
};

const Input = forwardRef(({ type, placeholder, value, onChange, name }: InputProps, ref) => (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} ref={ref} />
));

export default Input;
