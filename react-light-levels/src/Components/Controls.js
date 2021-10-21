import React from 'react'

function Controls(props) {

  const handleClick = (button) => {
    console.log('Controls - handleClick - button', button)
  }

  const lightButtons = props.lightData.map((d, i) => {
    return <button
      key={i}
      onClick={() => {
        props.dispatch({ lightState: d.name, lightCode: d.color });
        props.dispatchCount({ type: "CHANGE", payload: 1 });
      }}
    >{d.name}</button>
  })

  return (
    <>
      <div className="controls">
        {lightButtons}
      </div>

    </>
  )
}

export default Controls