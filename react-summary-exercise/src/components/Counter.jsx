import React, { useState, useContext } from 'react';
import DataContext from './context/DataContext';

function CounterHooks(props) {

    const dataContext = useContext(DataContext);
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
        dataContext.setCurrent((prevState) => {
            if (props.counterType === "One") {
                return ({
                    ...prevState,
                    counterOne: prevState.counterOne + 1
                })
            } else {
                return ({
                    ...prevState,
                    counterTwo: prevState.counterTwo + 1
                })
            }
        })
    };



    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);

        dataContext.setCurrent((prevState) => {
            if (props.counterType === "One") {
                return ({
                    ...prevState,
                    counterOne: prevState.counterOne - 1
                })
            } else {
                return ({
                    ...prevState,
                    counterTwo: prevState.counterTwo - 1
                })
            }
        })
    };

    const handleReset = () => {
        setCount((prevState) => (prevState = 0));
        dataContext.setCurrent((prevState) => {
            console.log(prevState)
            if (props.counterType === "One") {
                return ({
                    ...prevState,
                    counterOne: 0
                })
            } else {
                return ({
                    ...prevState,
                    counterTwo: 0
                })
            }
        })
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