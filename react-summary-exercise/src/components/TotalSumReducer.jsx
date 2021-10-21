import React from "react";
import { useContext } from "react";
import ReducerContext from "./context/ReducerContext";


export default function TotalSumReducer() {

    const [counterReducerState, dispatch] = useContext(ReducerContext);

    return (
        <>
            <h1>Total Sum Reducer : {counterReducerState.counterOne + counterReducerState.counterTwo}</h1>
        </>
    )
}