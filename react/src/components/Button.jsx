const Button = ({ onClick, type, color, text }) => {
    return (
        <button onClick={onClick} type={type} className={`btn ${color}`}>
            {text}
        </button>
    );
};

export default Button;
