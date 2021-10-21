import React from "react"

export default function Button(props) {


    return (
        <>
            <div>
                <button onClick={() => {
                    props.dispatchCount({ type: "CHANGE", payload: 1 })
                }}>+</button>
                <button onClick={() => {
                    props.dispatchCount({ type: "CHANGE", payload: -1 })
                }}>-</button>
                <button onClick={() => {
                    props.dispatchCount({ type: "SET", payload: 0 })
                }}>RESET</button>
            </div>

            <h2>Current Click Count: {props.currentClickState}</h2>
        </>
    )
}