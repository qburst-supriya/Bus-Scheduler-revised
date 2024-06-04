import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input';
import '@/components/shared/form/style.scss';

type FormType<T> = {
    buttonSubmit: (data: T) => void;
    fields: InputTypes[];
    inputs: T;
    style: 'column' | 'row';
};

type InputTypes = {
    type: string;
    placeholder?: string;
    name: string;
    options?: OptionsType;
    btnText?: string;
};
type OptionsType = {
    required: boolean;
};

const Form = <T,>({ buttonSubmit, fields, inputs, style }: FormType<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<typeof inputs>();
    const onSubmit: SubmitHandler<typeof inputs> = (data) => buttonSubmit(data);
    return (
        <form className={`form-container ${style}`} onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => {
                switch (field.type) {
                    case 'date':
                    case 'text':
                    case 'password':
                        return (
                            <>
                                <Input
                                    key={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    {...register(field.name, { ...field.options })}
                                ></Input>
                                {errors[field.name] && <span>This field is required</span>}
                            </>
                        );
                        break;
                    case 'button':
                    case 'submit':
                        return <Button key={field.name} type={field.type} btnText={field.btnText}></Button>;
                        break;
                    default:
                        return null;
                }
            })}
        </form>
    );
};

export default Form;
