import React, { useReducer } from "react";
import Controls from './Controls'
import Light from './Light'
import lightData from '../lightData'
import Button from './Button'
console.log('lightData', lightData)

const lightReducer = (state, action) => {
  switch (action.lightState) {
    case "off":
      return { lightState: "off", lightCode: "rgba(0,0,0,1)" }
    case "low":
      return { lightState: "low", lightCode: "rgba(0,0,0,.6)" }
    case "med":
      return { lightState: "medium", lightCode: "rgba(0,0,0,.4)" }
    case "high":
      return { lightState: "high", lightCode: "rgba(0,0,0,.1)" }
    default:
      return state
  }
}

const countReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return state + action.payload
    case "SET":
      return action.payload

    default:
      return state
  }
}
function App() {
  //const controls = ['off', "low", 'medium', 'high']
  const [currentLightState, dispatch] = useReducer(lightReducer, { lightState: "off", lightCode: "rgba(0,0,0,1)" });
  const [currentClickState, dispatchCount] = useReducer(countReducer, 0);
  return (
    <div className="App">
      <Controls lightData={lightData} dispatch={dispatch} dispatchCount={dispatchCount} />
      <Button dispatchCount={dispatchCount} currentClickState={currentClickState} />
      <Light currentLightState={currentLightState} />
    </div>

  );
}

export default App
