import React, { useState, useReducer } from "react";
import Counter from './Counter'
import DataContext from "./context/DataContext";
import ReducerContext from "./context/ReducerContext";
import ReducerCounterA from "./ReducerCounterA";
import ReducerCounterB from "./ReducerCounterB";
import TotalSumReducer from "./TotalSumReducer";

const countReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE":
            if (action.counterType === "A") {
                return { ...state, counterOne: state.counterOne + action.payload };
            } else {
                return { ...state, counterTwo: state.counterTwo + action.payload };
            }
        case "SET":
            if (action.counterType === "A") {
                return { ...state, counterOne: action.payload };
            } else {
                return { ...state, counterTwo: action.payload };
            }
        default:
            return state;
    }
}

function App() {
    const [current, setCurrent] = useState({
        counterOne: 0,
        counterTwo: 0,
    })

    const [counterReducerState, dispatch] = useReducer(countReducer, { counterOne: 0, counterTwo: 0 });



    return (
        <div className="nes-text is-primary">

            <DataContext.Provider value={{ current, setCurrent }}>
                <Counter counterType={"One"} />
                <Counter counterType={"Two"} />
            </DataContext.Provider>
            <h1>Total Sum: {current.counterOne + current.counterTwo}</h1>
            <ReducerContext.Provider value={[counterReducerState, dispatch]}>
                <ReducerCounterA />
                <ReducerCounterB />
                <TotalSumReducer />
            </ReducerContext.Provider>
        </div>
    );
}

export default App