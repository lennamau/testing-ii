import React, { Component } from 'react';
import Display from '../display/Display'

class Dashboard extends Component {
    state ={
        balls: 0,
        strikes: 0,
    }
 strike = () => {
     this.setState({ strikes: this.state.strikes + 1})
     if(this.state.strikes === 2) {
         this.setState({strikes: 0, balls: 0})
     }
 }

 ball = () => {
    this.setState({ balls: this.state.balls + 1})
    if(this.state.balls === 3) {
        this.setState({strikes: 0, balls: 0})
    }
}

hit = () => {
        this.setState({strikes: 0, balls: 0})
}

foul = () => {
    if(this.state.strikes < 2) {
        this.setState({strikes: this.state.strikes + 1 })
    }
}

  render() {
    return (

      <>
        <div>
        <Display balls = {this.state.balls} strikes = {this.state.strikes} />
        </div>
          <button data-testid="strike-btn" onClick={this.ball}>Balls</button>
          <button data-testid="ball-btn" onClick={this.strike}>Strikes</button>
          <button data-testid="foul-btn" onClick={this.foul}>Foul</button>
          <button data-testid="hit-btn" onClick={this.hit}>Hit</button>
      </>
    )
  }
}
export default Dashboard