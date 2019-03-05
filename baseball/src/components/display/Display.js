import React from 'react'

const Display = props => {
  return (
    <div>
      <h2>Game Info</h2>
      <h3 data-testid="strikes">Strikes: {props.strikes} </h3>
      <h3 data-testid="balls">Balls: {props.balls} </h3>

    </div>
  )
}

export default Display
