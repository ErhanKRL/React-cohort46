import { useState } from 'react';
import Count from './Count';
import Button from './Button';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return (
        <div >
            <Count count={count}/>
            <p>{feedback}</p>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Button style={{color: "green", width:'80px', marginRight: '10px'}} changeCount={increaseCount} name = "Add 1" />
            <Button style={{color: "red", width:'80px'}} changeCount={decreaseCount} name = "Subtract 1" disabled ={count <= 0 ? true : false}/>
            </div>
        </div>
    );
}

export default Counter;