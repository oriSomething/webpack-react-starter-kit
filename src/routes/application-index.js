import React, { PropTypes } from "react";
import CounterContianer from "../containers/counter";
import Counter from "../components/counter";


export default function ApplicationIndexRoute(props) {
  const { children } = props;

  return (
    <div className="col-xs-12">
      <div className="row text-xs-center">
        <CounterContianer>
          <Counter />
        </CounterContianer>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {children}
        </div>
      </div>
    </div>
  );
}

ApplicationIndexRoute.displayName = "ApplicationIndexRoute";

ApplicationIndexRoute.propTypes = {
  children: PropTypes.node
};
