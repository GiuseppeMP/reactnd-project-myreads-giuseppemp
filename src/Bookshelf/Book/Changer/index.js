import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "Bookshelf/Book/api";

/**
 * Changer, renderiza um select de opções para mudar
 * os livros de posição. A posição atual do livro deixa a estante destino
 * desabilitada.
 */
class Changer extends Component {
  onChangeTrocarEstante = event => {
    //BooksAPI.update(this.props.codigoDoLivro)
    console.log("changed", event.target.value);
  };

  render = () => {
    const { estantes, estante } = this.props;
    const opcoes = [...estantes].map(estanteLista => {
      let [valor, nome] = [estanteLista[1], estanteLista[0]];
      return (
        <option disabled={estante === valor} key={valor} value={valor}>
          {nome}
        </option>
      );
    });

    return (
      <div className="book-shelf-changer">
        <select onChange={this.onChangeTrocarEstante}>
          <option value="move" disabled>
            Mover para ...
          </option>
          {opcoes}
        </select>
      </div>
    );
  };
}

Changer.propTypes = {
  // @param estantes, lista de options a ser exibida como destino.
  estantes: PropTypes.any.isRequired,
  // @param estante atual, nome da estante atual do livro.
  estante: PropTypes.string,
  // @param onChangeLivros, função que deve-se chamar quando modificar os livros.
  onChangeLivros: PropTypes.func.isRequired,
  // @param codigoDoLivro, é utilizado para realizar as chamadas para api.
  codigoDoLivro: PropTypes.string.isRequired
};

Changer.defaultProps = {
  // caso estantes não seja informada, será utilizado a default do projeto starter.
  estantes: new Map([
    ["Currently Reading", "currentlyReading"],
    ["Want to Read", "wantToRead"],
    ["Read", "read"],
    ["None", "none"]
  ]),
  // caso estante atual não seja informada, será atribuida none.
  estante: "none"
};

export default Changer;
