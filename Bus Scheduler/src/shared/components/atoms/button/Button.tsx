type ButtonType = {
    submit: 'submit' | 'reset' | 'button' | undefined;
    btnText: string;
};
const Button = ({ submit, btnText }: ButtonType) => {
    return (
        <div className="button-container">
            <button type={submit}>{btnText}</button>
        </div>
    );
};

export default Button;
