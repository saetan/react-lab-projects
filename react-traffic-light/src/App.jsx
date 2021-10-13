import React, { useState } from 'react';
import bulbEvents from './bulbData';
import Bulb from './Bulb';
import TrafficLight from './TrafficLight';

export default function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}


{/* <div className="bulb" style={{ backgroundColor: currState === 'red' ? 'red' : 'black' }}></div>
          <div className="bulb" style={{ backgroundColor: currState === 'orange' ? 'orange' : 'black' }}></div>
          <div className="bulb" style={{ backgroundColor: currState === 'green' ? 'green' : 'black' }}></div> */}

