import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">
        {props.title}
      </a>

      <button
        className={`btn btn-${props.mode} my-2 my-sm-0`}
        // className={`btn btn-outline-primary my-2 my-sm-0`}
        id="btnDark"
        onClick={props.toggleMode}
      >
        Dark
      </button>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "set title here",
};
