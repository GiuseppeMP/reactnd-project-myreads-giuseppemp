import React, { Fragment } from "react";
import * as BooksAPI from "Bookshelf/Book/api";
import Bookshelf from "Bookshelf";
import Search from "BookSearch";
import { Route, Link } from "react-router-dom";
import Spinner from "App/Spinner";

class BooksApp extends React.Component {
  componentDidMount = () => {
    this.carregando(true);
    BooksAPI.getAll().then(res => {
      this.setState({ livros: res }, () => this.carregando(false));
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
    livros: [],
    carregando: true
  };

  carregando = ligado => {
    this.setState({
      carregando: ligado
    });
  };

  onChangeLivros = () => {
    this.carregando(true);
    BooksAPI.getAll().then(res => {
      this.setState({ livros: res, carregando: false });
    });
  };

  render() {
    const Estantes = [...this.state.estantes].map(estante => {
      return (
        <div>
          <Bookshelf
            key={estante[1]}
            onChangeLivros={this.onChangeLivros}
            nome={estante[0]}
            valor={estante[1]}
            livrosNaEstante={this.state.livros}
            livros={this.state.livros}
            estantes={this.state.estantes}
            carregando={this.carregando}
          />
        </div>
      );
    });

    return (
      <Fragment>
        <Spinner ligado={this.state.carregando} />
        <div className="app container ui">
          <div className="column">
            <Route
              exact
              path="/search"
              render={() => (
                <Search
                  livrosNaEstante={this.state.livros}
                  onChangeLivros={this.onChangeLivros}
                  carregando={this.carregando}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>My Reads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>{Estantes}</div>
                  </div>
                  <div className="open-search">
                    <Link to="/search">
                      <button title="Adicionar">Adicionar Livros</button>
                    </Link>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BooksApp;
