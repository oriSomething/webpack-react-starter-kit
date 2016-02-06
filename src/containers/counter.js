import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import assign from "object-assign";
import incrementAction from "../actions/counter/increment";


class CounterContianer extends Component {
  render() {
    const { children } = this.props;

    if (children) {
      return React.cloneElement(
        children,
        assign({}, this.props, children.props),
        children.props.children
      );
    } else {
      return null;
    }
  }
}

CounterContianer.displayName = "CounterContianer";

CounterContianer.propTypes = {
  children: PropTypes.node
};

function mapStateToProps({ counter }) {
  return { counter };
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators({
      increment: incrementAction
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContianer);
