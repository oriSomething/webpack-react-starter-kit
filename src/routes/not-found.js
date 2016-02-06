import React, { PropTypes } from "react";


export default function NotFoundRoute(props) {
  const { children } = props;

  return (
    <div className="col-xs-12">
      <div className="row text-xs-center">
        <h1 className="col-xs-12">- 404 -</h1>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {children}
        </div>
      </div>
    </div>
  );
}

NotFoundRoute.displayName = "NotFoundRoute";

NotFoundRoute.propTypes = {
  children: PropTypes.node
};
