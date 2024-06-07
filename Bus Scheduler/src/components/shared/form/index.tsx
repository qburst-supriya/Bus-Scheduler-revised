import { useForm, SubmitHandler, FieldValues, DefaultValues } from 'react-hook-form';

import Button from '@/components/ui/button/Button';
import FormInput from '@/components/shared/form/formInput';
import '@/components/shared/form/style.scss';

type FormType<T> = {
    buttonSubmit: (data: T) => void;
    fields: InputFieldTypes[];
    style: 'column' | 'row';
    defaultData: FieldValues;
};

type InputFieldTypes = {
    type: string;
    placeholder?: string;
    name: string;
    options?: OptionsType;
    btnText?: string;
    value?: string | '';
};
type OptionsType = {
    required: boolean;
};

const Form = <T extends FieldValues>({ buttonSubmit, fields, style, defaultData }: FormType<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        defaultValues: { ...defaultData } as DefaultValues<T>,
    });
    const onSubmit: SubmitHandler<T> = (data) => {
        buttonSubmit(data);
    };
    return (
        <form className={`form-container ${style}`} onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => {
                switch (field.type) {
                    case 'date':
                    case 'text':
                    case 'password':
                        return (
                            <div key={'div' + field.name}>
                                <FormInput
                                    name={field.name}
                                    key={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    options={{ ...register(field.name as never, { ...field.options }) }}
                                ></FormInput>
                                {errors[field.name] && <span>This field is required</span>}
                            </div>
                        );
                        break;
                    case 'button':
                    case 'submit':
                        return <Button key={field.name} type={field.type} btnText={field.btnText}></Button>;
                    default:
                        return null;
                }
            })}
        </form>
    );
};

export default Form;
