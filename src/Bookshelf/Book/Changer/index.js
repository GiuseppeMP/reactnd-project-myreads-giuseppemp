import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "Bookshelf/Book/api";

/**
 * Changer, renderiza um select de opções para mudar
 * os livros de posição. A posição atual do livro deixa a estante destino
 * desabilitada.
 */
class Changer extends Component {
  onChangeTrocarEstante = async event => {
    this.props.carregando(true);
    const { codigoDoLivro } = this.props;
    await BooksAPI.update(codigoDoLivro, event.target.value);
    this.props.onChangeLivros();
  };

  render = () => {
    const { estantes, estante, vitrine } = this.props;

    let estantesChanger = [...estantes];
    if (vitrine) {
      estantesChanger = new Map([
        ["Currently Reading", "currentlyReading"],
        ["Want to Read", "wantToRead"],
        ["Read", "read"],
        ["None", "none"]
      ]);
    }
    const opcoes = [...estantesChanger].map(estanteLista => {
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
          <option selected value="move" disabled>
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
  codigoDoLivro: PropTypes.string.isRequired,
  // @param vitrine, determina se o livro está sendo escolhido, logo não possui estante.
  vitrine: PropTypes.bool,
  // @param carregando
  carregando: PropTypes.func
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
  estante: "none",
  vitrine: false
};

export default Changer;
