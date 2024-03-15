const Button = ({ increaseCount }) => {
    return (
        <div>
            <button onClick={increaseCount}>Add 1!</button>
        </div>
    );
};

export default Button;