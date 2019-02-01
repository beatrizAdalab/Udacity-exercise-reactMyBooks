import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ButtonSearch.css";

class ButtonSearch extends Component {
  render() {
    return (
      <Link className="link" to="/SearchBook">
        <i className="fas fa-plus-circle" />
      </Link>
    );
  }
}

export default ButtonSearch;
