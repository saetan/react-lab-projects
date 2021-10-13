import React from "react"

export default function Bulb(props) {
    return (
        <>
            <div className="bulb" style={{ backgroundColor: props.currStateColour === props.colour ? props.colour : "black" }}></div>
        </>
    )
}
