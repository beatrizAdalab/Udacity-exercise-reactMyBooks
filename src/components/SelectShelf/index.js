import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./SelectShelf.css";

class SelectShelf extends Component {
  constructor(props) {
    super(props);
    this.selected = this.selected.bind(this);
  }
  selected(value) {
    if (this.props.bookShelf === value) {
      return true;
    } else {
      return false;
    }
  }

  hidden() {
    if (this.props.changeId === this.props.bookId) {
      return "show";
    } else {
      return "hidden";
    }
  }
  render() {
    const { onChangeSelect, bookId, bookShelf } = this.props;

    if (this.props.changeId !== this.props.bookId) {
      return null;
    } else {
      return (
        <Fragment>
          <label htmlFor="shelf" />
          <select
            id="shelf"
            name="shelf"
            onChange={onChangeSelect}
            className={`${bookId}`}
            value={bookShelf ? bookShelf : "none"}>
            <option disabled>Move to ...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </Fragment>
      );
    }
  }
}

SelectShelf.propTypes = {
  bookShelf: PropTypes.string,
  onChangeSelect: PropTypes.func,
  bookId: PropTypes.string
};

export default SelectShelf;
