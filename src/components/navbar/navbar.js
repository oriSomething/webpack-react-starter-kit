import React, { PropTypes } from "react";
import { Link } from "react-router";


export default function Navbar(props) {
  const { children, title } = props;

  return (
    <nav className="navbar navbar-fixed-top navbar-light bg-faded">
      <Link className="navbar-brand" to="/">{title}</Link>
      <ul className="nav navbar-nav">
        {children}
      </ul>
    </nav>
  );
}

Navbar.displayName = "Navbar";

Navbar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
