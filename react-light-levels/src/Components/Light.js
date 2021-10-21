import React from 'react'
import lightData from '../lightData'

function Lights(props) {

  const styles = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '1px solid',
    background: props.currentLightState.lightCode
  }

  return (
    <div style={styles}></div>
  )
}

export default Lights