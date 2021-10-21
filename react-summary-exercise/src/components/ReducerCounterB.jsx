import React, { useContext } from 'react';
import ReducerContext from './context/ReducerContext';



function ReducerCounterB(props) {
    const [counterReducerState, dispatch] = useContext(ReducerContext);
    return (
        <section>
            <h2>Count:{counterReducerState.counterTwo}</h2>
            <button onClick={() => { dispatch({ type: "CHANGE", payload: 1, counterType: "B" }) }}>+</button>
            <button onClick={() => { dispatch({ type: "CHANGE", payload: -1, counterType: "B" }) }}>-</button>
            <button onClick={() => { dispatch({ type: "SET", payload: 0, counterType: "B" }) }}>Reset</button>
        </section>
    );
}

export default ReducerCounterB;