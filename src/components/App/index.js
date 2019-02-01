import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import SearchBook from "../SearchBook";
import ListBooks from "../ListBooks";
import "./App.css";
import Message from "../Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
      Query: "",
      loaded: true,
      BooksFilters: [],
      change: false,
      bookId: {},
      shelf: "",
      idChange: ""
    };

    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.onClickPlus = this.onClickPlus.bind(this);
  }

  fetchBooks(value) {
    BooksAPI.getAll().then(books => {
      this.setState({
        Books: books,
        loaded: false,
        change: value
      });
    });
  }

  componentDidMount() {
    this.fetchBooks(false);
  }

  changeBookShelf(books) {
    let allMyBooks = this.state.Books;

    books.map(book => ({ ...book, shelf: "none" }));

    books.map(book => {
      allMyBooks.map(item =>
        item.id === book.id ? (book.shelf = item.shelf) : false
      );
      return books;
    });
    return books;
  }

  filterBooks(query) {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(books => {
          if (books.length > 0) {
            this.changeBookShelf(books);
          }
          this.setState({ BooksFilters: books });
        })
        .catch(error => <Message message={error}/>);
    } else {
      this.setState({ BooksFilters: [] });
    }
  }

  onChangeQuery(e) {
    const valueQuery = e.currentTarget.value;

    this.setState({
      Query: valueQuery
    });
  }

  onClickPlus(event) {
    const idClicked = event.currentTarget.id;
    this.setState({ idChange: idClicked });
  }

  onChangeSelect(event) {
    const valueSelect = event.currentTarget.value;
    const idSelect = event.currentTarget.className;

    this.setState({ idChange: "" });

    BooksAPI.get(idSelect)
      .then(book => BooksAPI.update(book, valueSelect))
      .then(BooksAPI.getAll())
      .then(this.fetchBooks(true));
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.Query !== nextState.Query) {
      this.filterBooks(this.state.Query);
    }
    if (this.state.change !== nextState.change) {
      this.fetchBooks(false);
      this.filterBooks(this.state.Query);
    }
  }

  render() {
    const { Books, Query, BooksFilters, loaded, idChange } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                onClickPlus={this.onClickPlus}
                changeId={idChange}
                books={Books}
                loaded={loaded}
                onChangeSelect={this.onChangeSelect}
              />
            )}
          />
          <Route
            path="/SearchBook"
            render={props => {
              return (
                <SearchBook
                  onClickPlus={this.onClickPlus}
                  changeId={idChange}
                  booksFilters={BooksFilters}
                  query={Query}
                  onChangeQuery={this.onChangeQuery}
                  onChangeSelect={this.onChangeSelect}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
