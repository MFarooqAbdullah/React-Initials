import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counters.value
  // };
  // handleAddition = () => {
  //   console.log("add is clicked", this)
  //   this.setState({ value: this.state.value + 1 });

  // }
  badgeClasses() {
    let cClass = "badge m-2 badge-";
    cClass += this.props.counters.value === 0 ? "warning" : "success";
    return cClass;
  }

  formatCounter() {
    const { value } = this.props.counters;
    return value === 0 ? "Zero" : value;
  }
  render() {
    console.log('props:::', this.props)
    return (
      <div>
        <span className={this.badgeClasses()}>{this.formatCounter()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counters)} className="btn btn-sm btn-secondary">Add</button>
        <button onClick={() => this.props.onDelete(this.props.counters.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }


}

export default Counter;
