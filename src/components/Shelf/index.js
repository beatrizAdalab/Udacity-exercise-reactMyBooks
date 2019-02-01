import React, { Component } from "react";
import "./Shelf.css";
import ButtonSearch from "../ButtonSearch";
import Message from "../Message";
import PropTypes from "prop-types";
import Card from "../Card";
import "./Shelf.css";

class Shelf extends Component {
  render() {
    const {
      books,
      status,
      btnSearch,
      onChangeSelect,
      changeId,
      onClickPlus
    } = this.props;

    return (
      <div className="Shelf">
        <h2 className="title__shelf">
          {status}
          {btnSearch ? <ButtonSearch /> : null}
        </h2>
        <ul className="list__books">
          {books.length > 0 ? (
            books.map(item => (
              <Card
                key={item.id}
                item={item}
                onChangeSelect={onChangeSelect}
                changeId={changeId}
                onClickPlus={onClickPlus}
              />
            ))
          ) : (
            <Message message="Book not found" />
          )}
        </ul>
      </div>
    );
  }
}

Shelf.propTypes = {
  status: PropTypes.string,
  btnSearch: PropTypes.bool,
  books: PropTypes.array
};

export default Shelf;
