import React, { Component, PropTypes } from "react";


export default class Counter extends Component {
  render() {
    const { props } = this;
    const { counter, counterActions: actions } = props;

    return (
      <div>
        <h1>{counter.counter}</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={actions.increment}>
          increase
        </button>
      </div>
    );
  }
}

Counter.displayName = "Counter";

Counter.propTypes = {
  counter: PropTypes.object,
  counterActions: PropTypes.objectOf(PropTypes.func)
};
