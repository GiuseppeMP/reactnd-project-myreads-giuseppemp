import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "Bookshelf";
import * as BooksAPI from "Bookshelf/Book/api";

class Search extends React.Component {
  state = {
    livrosBusca: [],
    digitando: false,
    digitandoTimeout: 0,
    termo: "",
    estantes: new Map([["Resultados", "resultado"]]),
    mensagem: ""
  };

  onChangePesquisa = async event => {
    const _this = this;
    if (_this.state.digitandoTimeout) {
      clearTimeout(_this.state.digitandoTimeout);
    }
    _this.setState({
      termo: event.target.value,
      digitando: false,
      digitandoTimeout: setTimeout(function() {
        console.log(_this.state.termo);
        let livros = BooksAPI.search(_this.state.termo);
        _this.props.carregando(true);
        livros.then(res => {
          console.log(res);
          if (res.error) {
            _this.setState({ mensagem: res.error });
          } else {
            _this.setState({ mensagem: "" });
            _this.setState({ livrosBusca: res });
          }
          _this.props.carregando(false);
        });
      }, 1500)
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button title="Voltar" className="close-search">
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              list="termos-suportados"
              type="text"
              placeholder="Search by title or author"
              onChange={this.onChangePesquisa}
              autoComplete="off"
            />
            <datalist id="termos-suportados">
              <option value="Android" />
              <option value="Art" />
              <option value="Artificial Intelligence" />
              <option value="Astronomy" /> <option value="Austen" />
              <option value="Baseball" /> <option value="Basketball" />
              <option value="Bhagat" /> <option value="Biography" />
              <option value="Brief" /> <option value="Business" />
              <option value="Camus" /> <option value="Cervantes" />
              <option value="Christie" /> <option value="Classics" />
              <option value="Comics" /> <option value="Cook" />
              <option value="Cricket" /> <option value="Cycling" />
              <option value="Desai" /> <option value="Design" />
              <option value="Development" />
              <option value="Digital Marketing" /> <option value="Drama" />
              <option value="Drawing" /> <option value="Dumas" />
              <option value="Education" /> <option value="Everything" />
              <option value="Fantasy" /> <option value="Film" />
              <option value="Finance" /> <option value="First" />
              <option value="Fitness" /> <option value="Football" />
              <option value="Future" /> <option value="Games" />
              <option value="Gandhi" /> <option value="Homer" />
              <option value="Horror" /> <option value="Hugo" />
              <option value="Ibsen" /> <option value="Journey" />
              <option value="Kafka" /> <option value="King" />
              <option value="Lahiri" /> <option value="Larsson" />
              <option value="Learn" /> <option value="Literary Fiction" />
              <option value="Make" /> <option value="Manage" />
              <option value="Marquez" /> <option value="Money" />
              <option value="Mystery" /> <option value="Negotiate" />
              <option value="Painting" /> <option value="Philosophy" />
              <option value="Photography" /> <option value="Poetry" />
              <option value="Production" /> <option value="Programming" />
              <option value="React" /> <option value="Redux" />
              <option value="River" /> <option value="Robotics" />
              <option value="Rowling" /> <option value="Satire" />
              <option value="Science Fiction" /> <option value="Shakespeare" />
              <option value="Singh" /> <option value="Swimming" />
              <option value="Tale" /> <option value="Thrun" />
              <option value="Time" /> <option value="Tolstoy" />
              <option value="Travel" /> <option value="Ultimate" />
              <option value="Virtual Reality" />
              <option value="Web Development" />
              <option value="iOS" />
            </datalist>
          </div>
        </div>

        <div className="search-books-results">
          <Bookshelf
            nome={"resultados"}
            valor={"resultados"}
            vitrine={true}
            livros={this.props.livrosNaEstante}
            livrosVitrine={this.state.livrosBusca}
            estantes={this.state.estantes}
            onChangeLivros={this.props.onChangeLivros}
          />
          {this.state.mensagem}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  // @param onChangeLivros, função que deve-se chamar quando modificar os livros.
  onChangeLivros: PropTypes.func.isRequired,
  // @param carregando
  carregando: PropTypes.func,
  // @param livrosNaEstante, contem os livros já presentes na estante.
  livrosNaEstante: PropTypes.any
};

Search.defaultProps = {
  // caso livros não sejam informados, será utilizado uma lista vazia.
  livrosNaEstante: []
};

export default Search;
