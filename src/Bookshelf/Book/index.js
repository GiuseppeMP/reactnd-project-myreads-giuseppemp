import React from "react";
import PropTypes from "prop-types";
import Changer from "./Changer";

/**
 * Functional component que renderiza um card de um livro de uma estante.
 * Recebe parametros como titulo, autor, url da capa, altura e largura da capa.
 */
function Book(props) {
  const { largura, altura, capa, titulo, autores } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: largura,
            height: altura,
            backgroundImage: `url(${capa})`
          }}
        />
        <Changer {...props} />
      </div>
      <div className="book-title">{titulo}</div>
      <div className="book-authors">{autores}</div>
    </div>
  );
}

Book.propTypes = {
  // @param titulo utilizado abaixo da capa.
  titulo: PropTypes.string.isRequired,
  // @param autor, nome do autor utilizado abaixo do titulo.
  autores: PropTypes.array.isRequired,
  // url acessível da imagem usado como capa.
  capa: PropTypes.string.isRequired,
  // largura utilizada na imagem da capa.
  largura: PropTypes.number,
  // altura utilizada na imagem da capa.
  altura: PropTypes.number,
  // estante pai, no caso é passado para o child o nome do <Bookshelf/> parent.
  estante: PropTypes.string.isRequired,
  // @param onChangeLivros, função que deve-se chamar quando modificar os livros.
  onChangeLivros: PropTypes.func.isRequired,
  // @param estantes, lista de options a ser exibida como destino.
  estantes: PropTypes.any.isRequired,
  // @param codigoDoLivro, é utilizado para realizar as chamadas para api.
  codigoDoLivro: PropTypes.string.isRequired
};

Book.defaultProps = {
  // caso largura não seja informada, será utilizado ?128.
  largura: 128,
  // caso altura não seja informada, será utilizado ?188.
  altura: 188
};

export default Book;
