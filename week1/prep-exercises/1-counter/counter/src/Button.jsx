const Button = ({ changeCount, name, style, disabled }) => {
    return (
        <div>
            <button onClick={changeCount} style={style} disabled = {disabled}>{name}</button>
        </div>
    );
};

export default Button;