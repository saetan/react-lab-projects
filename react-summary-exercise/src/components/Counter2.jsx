import React, { useState } from 'react';

function CounterHooks(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
        props.setCurrent((prevState) => prevState + 1);
    };

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);
        props.setCurrent((prevState) => prevState - 1);
    };

    const handleReset = () => {
        setCount((prevState) => (prevState = 0));
        props.setCurrent((prevState) => (prevState = 0));
    };

    return (
        <section>
            <h2>Count:{count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    );
}

export default CounterHooks;