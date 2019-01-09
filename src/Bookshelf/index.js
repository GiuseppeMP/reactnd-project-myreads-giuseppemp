import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function Bookshelf(props) {
  const { livros, valor, nome, onChangeLivros } = props;

  const livrosDaEstante = [...livros]
    .filter(livro => livro.shelf === valor)
    .map(livro => {
      const { title, authors, imageLinks } = livro;
      return (
        <li>
          <Book
            estante={valor}
            titulo={title}
            onChangeLivros={onChangeLivros}
            autores={authors}
            capa={imageLinks.thumbnail}
          />
        </li>
      );
    });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{nome}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{livrosDaEstante}</ol>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  // @param nome utilizado como titulo da estante.
  nome: PropTypes.string.isRequired,
  // @param valor, utilizado como identificador da estante.
  valor: PropTypes.string.isRequired,
  // @param, array de books que serão controlados pela estante.
  livros: PropTypes.array,
  // @param onChangeLivros, função que deve-se chamar quando modificar os livros.
  onChangeLivros: PropTypes.func.isRequired
};

Bookshelf.defaultProps = {
  // caso não possua nenhuma livro, iniciar vazia.
  livros: []
};

export default Bookshelf;