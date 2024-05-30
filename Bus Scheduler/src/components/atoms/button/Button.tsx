type ButtonType = {
    type: 'submit' | 'reset' | 'button' | undefined;
    btnText: string;
    onClick: () => void;
};
const Button = ({ type, btnText, onClick }: ButtonType) => {
    return (
        <div className="button-container">
            <button type={type} onClick={onClick}>
                {btnText}
            </button>
        </div>
    );
};

export default Button;
