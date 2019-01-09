import React from "react";
import * as BooksAPI from "Bookshelf/Book/api";
//import "./App.css";
import Bookshelf from "Bookshelf";
import Search from "BookSearch";

class BooksApp extends React.Component {
  componentDidMount = () => {
    BooksAPI.getAll().then(res => {
      this.setState({ livros: res });
    });
  };

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    estantes: new Map([
      ["Currently Reading", "currentlyReading"],
      ["Want to Read", "wantToRead"],
      ["Read", "read"],
      ["None", "none"]
    ]),
    livros: []
  };

  onChangeLivros = () => {
    BooksAPI.getAll().then(res => {
      this.setState({ livros: res });
    });
  };

  render() {
    const Estantes = [...this.state.estantes].map(estante => {
      console.log(estante[1]);
      return (
        <Bookshelf
          onChangeLivros={this.onChangeLivros}
          nome={estante[0]}
          valor={estante[1]}
          livros={this.state.livros}
          estantes={this.state.estantes}
        />
      );
    });

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>{Estantes}</div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
