import React, { Component } from "react";
import Counter from './counter';
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 12 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleIncrement = (counter) => {
    console.log('Increment Event', counter)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
  }
  handleReset = (counterId) => {
    console.log('Reset clicked', counterId)
    const counters = this.state.counters.map(c => { c.value = 0; return c });
    this.setState({ counters })
  }
  handleDelete = (counterId) => {
    console.log('Delete clicked', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters: counters })
  }
  render() {
    return (
      <div style={{
        marginLeft: 434
      }}>
        <button onClick={this.handleReset} className="btn btn-primary btn-md m-3">Reset</button>

        {
          this.state.counters.map(counters =>
            <Counter
              key={counters.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counters={counters} />)
        }
      </div >
    );
  }
}

export default Counters;
