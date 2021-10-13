import React from "react";

export default function Card(props) {

    return (
        <>
            <img id={props.id} className="card" src={props.isFlipped ? props.cardImage : props.backgroundImage} alt="uwu" />
        </>
    )
}
