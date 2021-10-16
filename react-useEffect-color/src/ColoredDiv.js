// IMPORT useEffect
import React, { useState, useEffect } from "react";

const ColoredDiv = (props) => {

  const [width, setWidth] = useState(0);
  // SETUP useEffect
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  const removeColour = (event) => {
    const filtered = props.colors.filter((color, index) => {
      return index !== props.index
    });
    props.setColors(filtered);

  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
  }, [])
  let styles = {
    background: props.color,
    // add conditional logic here
    flex: width >= 1024 ? 1 : 0
  }

  return (
    <>
      <div
        style={styles}
        className="colored-div"
      >
        {props.color}
        <button onClick={removeColour}>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv