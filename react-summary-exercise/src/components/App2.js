import React, { useState } from "react";
import Counter from './Counter'


function App() {
    const [current1, setCurrent1] = useState(0);
    const [current2, setCurrent2] = useState(0);

    const [current, setCurrent] = useState({
        counterOne: 0,
        counterTwo: 0,
    })

    return (
        <div className="nes-text is-primary">

            <Counter setCurrent={setCurrent1} />
            <Counter setCurrent={setCurrent2} />


            <h1>Total Sum: {current1 + current2}</h1>
        </div>
    );
}

export default App