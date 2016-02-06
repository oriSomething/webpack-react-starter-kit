import React, { Component, PropTypes } from "react";
import Navbar from "../components/navbar";
import { APPLICATION_NAME } from "../config";


export default class ApplicationRoute extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <header>
          <Navbar.Navbar title={APPLICATION_NAME}>
            <Navbar.Link href="/404">404</Navbar.Link>
          </Navbar.Navbar>
        </header>

        <main className="container">
          <div className="row">
            {children}
          </div>
        </main>
      </div>
    );
  }
}

ApplicationRoute.displayName = "ApplicationRoute";

ApplicationRoute.propTypes = {
  children: PropTypes.node
};
