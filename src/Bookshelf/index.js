import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import _ from "underscore";
import Faker from "faker";

function Bookshelf(props) {
  const {
    livros,
    valor,
    nome,
    onChangeLivros,
    estantes,
    vitrine,
    carregando,
    livrosNaEstante
  } = props;

  const livrosDaEstante = [...livros]

    .filter(livro => livro.shelf === valor || vitrine)
    .map(livro => {
      const { title, authors, imageLinks, id } = livro;

      let shelf = livro.shelf;

      livrosNaEstante
        .filter(livroNaEstante => livroNaEstante.id === id)
        .forEach(livroNaEstante => {
          shelf = livroNaEstante.shelf;
        });

      let capa = null;

      if (_.isUndefined(imageLinks) || _.isUndefined(imageLinks.thumbnail)) {
        capa = Faker.image.image;
      } else {
        capa = imageLinks.thumbnail;
      }

      let autores = authors;
      if (_.isUndefined(authors) || _.isEmpty(authors)) {
        autores = [..."Autor Desconhecido."];
      }

      return (
        <li key={id}>
          <Book
            codigoDoLivro={id}
            estantes={estantes}
            estante={shelf}
            titulo={title}
            onChangeLivros={onChangeLivros}
            autores={autores}
            capa={capa}
            vitrine={vitrine}
            carregando={carregando}
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
  onChangeLivros: PropTypes.func.isRequired,
  // @param estantes, lista de estantes disponíveis passada para Changer.
  estantes: PropTypes.any.isRequired,
  // @param vitrine, especifica se deve filtrar pelo parametro shelf.
  vitrine: PropTypes.bool,
  // @param, array de books da vitrine que serão controlados pela estante.
  livrosNaEstante: PropTypes.array,
  // @param carregando
  carregando: PropTypes.func
};

Bookshelf.defaultProps = {
  // caso não possua nenhuma livro, iniciar vazia.
  livros: [],
  // caso não seja informado vitrine recebe false.
  vitrine: false,
  // caso não possua nenhuma livro, iniciar vazia.
  livrosNaEstante: [],
  // caso não seja informado, log.
  carregando: () => console.warn("Controle loader não recebido")
};

export default Bookshelf;
