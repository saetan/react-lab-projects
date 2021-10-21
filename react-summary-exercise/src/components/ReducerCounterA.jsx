import React, { useContext } from 'react';
import ReducerContext from './context/ReducerContext';



function ReducerCounterA(props) {
    const [counterReducerState, dispatch] = useContext(ReducerContext);
    return (
        <section>
            <h2>Count:{counterReducerState.counterOne}</h2>
            <button onClick={() => { dispatch({ type: "CHANGE", payload: 1, counterType: "A" }) }}>+</button>
            <button onClick={() => { dispatch({ type: "CHANGE", payload: -1, counterType: "A" }) }}>-</button>
            <button onClick={() => { dispatch({ type: "SET", payload: 0, counterType: "A" }) }}>Reset</button>
        </section>
    );
}

export default ReducerCounterA;