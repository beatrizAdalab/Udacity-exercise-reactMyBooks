import React, { Component } from "react";
import Shelf from "../Shelf";
import { Link } from "react-router-dom";
import "./SearchBooks.css";
import PropTypes from "prop-types";

class SearchBook extends Component {
  render() {
    const {
      query,
      onChangeQuery,
      booksFilters,
      onChangeSelect,
      onClickPlus,
      changeId
    } = this.props;

    return (
      <div className="box-search">
        <div className="container__search">
          <Link className="link" to="./">
            <i className="fas fa-book" />
          </Link>
          <label className="filterBook" htmlFor="filterQuery" />
          <input
            autoFocus
            id="filterQuery"
            type="text"
            onChange={onChangeQuery}
            placeholder={"Ej. Travels"}
            value={query}
          />
        </div>
        <Shelf
          onClickPlus={onClickPlus}
          changeId={changeId}
          books={booksFilters}
          status="Search"
          btnSearch={false}
          onChangeSelect={onChangeSelect}
        />
      </div>
    );
  }
}

SearchBook.propTypes = {
  onChangeQuery: PropTypes.func,
  value: PropTypes.string
};

export default SearchBook;
