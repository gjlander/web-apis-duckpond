const Button = ({ type, color, text }) => {
    return (
        <button type={type} className={`btn ${color}`}>
            {text}
        </button>
    );
};

export default Button;
