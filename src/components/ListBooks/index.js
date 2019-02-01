import React, { Component } from "react";
import Shelf from "../Shelf";
import Message from "../Message";
import "./ListBooks.css";
import PropTypes from "prop-types";

class ListBooks extends Component {
  loading() {
    if (this.props.loaded) {
      return <Message message="Loading..." />;
    } else {
    }
  }

  render() {
    const { books, loaded, onChangeSelect, changeId, onClickPlus } = this.props;
    if (loaded) {
      return (
        <div className="main__list-app">
          <header className="container__title-app">
            <h1 className="title__app"> MyReads</h1>
          </header>
          {this.loading()}
        </div>
      );
    } else {
      return (
        <div className="main__list-app">
          <header className="container__title-app">
            <h1 className="title__app"> MyReads</h1>
          </header>

          <Shelf
            onClickPlus={onClickPlus}
            changeId={changeId}
            books={books.filter(book => book.shelf === "currentlyReading")}
            status="Currently Reading"
            btnSearch={false}
            onChangeSelect={onChangeSelect}
          />
          <Shelf
            onClickPlus={onClickPlus}
            changeId={changeId}
            books={books.filter(book => book.shelf === "wantToRead")}
            status="Want to Read"
            btnSearch={true}
            onChangeSelect={onChangeSelect}
          />
          <Shelf
            onClickPlus={onClickPlus}
            changeId={changeId}
            books={books.filter(book => book.shelf === "read")}
            status="Read"
            btnSearch={false}
            onChangeSelect={onChangeSelect}
          />
        </div>
      );
    }
  }
}

ListBooks.propTypes = {
  loaded: PropTypes.bool
};

export default ListBooks;
