import React, { useState } from 'react'
import Bulb from './Bulb'
import bulbEvents from './bulbData'

export default function TrafficLight() {
    const [currState, setCurrState] = useState(bulbEvents.Stop);
    function render() {

        return Object.keys(bulbEvents).map((record, index) => {
            return <Bulb key={index} colour={bulbEvents[record]} currStateColour={bulbEvents[currState]} />
        })

    }

    return (
        <>
            <h1>Traffic Light</h1>
            <section>
                <div id="control-panel">
                    <h2 id="stop" className="button" onClick={() => {
                        setCurrState("Stop");
                    }}>Stop</h2>

                    <h2 id="slow" className="button" onClick={() => {
                        setCurrState("Slow");
                    }}>Slow</h2>


                    <h2 id="go" className="button" onClick={() => {
                        setCurrState("Go");
                    }}>Go</h2>
                </div>
                <div id="traffic-lights">
                    {render()}
                </div>
            </section>
        </>
    )
}
