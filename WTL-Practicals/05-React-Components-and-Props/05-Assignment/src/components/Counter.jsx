import React, { useState, useEffect } from "react";

const Counter = ({ name, initial_value , flag }) => {
    const [count, setCount] = useState(initial_value);

    const onReset = () => {
        setCount(initial_value)
    };

    useEffect(() => {
            setCount(initial_value);
    }, [flag ,initial_value])
    

    return (
        <div >
            <h1>Hi There! This is {name} Counter</h1>
            <h2>My Value is {count}</h2>
            <div className="btns">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
