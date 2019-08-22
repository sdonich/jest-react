import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    isError: false
  }

  onDecrement = () => {
    const currentCounter = this.state.counter;
    if (currentCounter === 0) {
      this.setState({ isError: true });
    } else {
      this.setState({ counter: currentCounter - 1 });
    }
  }

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1, isError: false });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        {
          this.state.isError ? <div data-test="error-display">You can not decremtn bellow 0</div> : null
        }
        <button
          data-test="increment-button"
          onClick={() => this.onIncrement()}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.onDecrement()}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
