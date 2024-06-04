import '@/components/ui/button/style.scss';

type ButtonProps = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    btnText: string | undefined;
    onClick?: () => void;
};
const Button = ({ type, btnText, onClick }: ButtonProps) => {
    return (
        <div className="button-container">
            <button type={type} onClick={onClick}>
                {btnText}
            </button>
        </div>
    );
};

export default Button;
