import React, { useState, useEffect } from "react";
import "./styles.css";
import ColoredDiv from './ColoredDiv'

const colourList = ['lightgreen', 'pink', 'lightblue', 'blue', 'brown', 'purple', 'aqua', 'chocolate', 'darkviolet', 'gold',
  'hotpink', 'lavender', 'limegreen', 'mediumblue', 'snow', 'tan', 'teal'];
const getRandomColour = () => {
  let getRandomNumber = Math.floor(Math.random() * colourList.length);
  return colourList[getRandomNumber];
}
export default function App() {
  const [colors, setColors] = useState(['lightgreen', 'pink', 'lightblue'])
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, [])

  const colorsArr = colors.map((d, i) => {
    return (
      <ColoredDiv color={d} key={i} index={i} colors={colors} setColors={setColors} />)
  })

  const addNewColour = () => {
    let newColour = getRandomColour();
    setColors([...colors, newColour]);
  }

  let styles = {
    flexWrap: "wrap"
  }


  return (
    <div className="App">
      <h1>Current Window Width: {width}</h1>
      <div style={styles} className='colored-divs'>
        {colorsArr}
      </div>
      <button onClick={addNewColour}>Add New Color</button>
    </div>
  );
}
