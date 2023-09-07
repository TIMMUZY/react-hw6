import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(name, age, gender) {
    super()
    this.state = {
      result: undefined,
      input1: undefined,
      input2  : undefined
    }
  }

  

  render() {
    const plus = ()=> {
    this.setState({ result: this.state.input1 + this.state.input2 })
  }

  const minus = ()=> {
    this.setState({ result: this.state.input1 - this.state.input2 })
  }

  const multiply = ()=> {
    this.setState({ result: this.state.input1 * this.state.input2 })
  }

  const division = ()=> {
    this.setState({ result: this.state.input1 / this.state.input2 })
  }

  const root = ()=> {
    this.setState({ result: this.state.input1 ** this.state.input2 })
  }

  const root2 = ()=> {
    console.log(this.state);

    this.setState({ result: Math.pow(this.state.input1,1/this.state.input2)})
  }


    return (
      <div class="container">
        <input onChange={(event)=>{this.setState({ input1:+event.target.value })}} type="text" />
        <input onChange={(event)=>{this.setState({ input2:+event.target.value })}} type="text" />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
        <button onClick={root}>**</button>
        <button onClick={root2}>//</button>

        <h1>{this.state.result}</h1>
      </div>
    );
  }
}



export default App;
