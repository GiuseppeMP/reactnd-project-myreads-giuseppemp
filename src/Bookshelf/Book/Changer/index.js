import React from "react";
import PropTypes from "prop-types";

/**
 * Changer, renderiza um select de opções para mudar
 * os livros de posição. A posição atual do livro deixa a estante destino
 * desabilitada.
 */
function Changer(props) {
  const { estantes, atual, onChangeLivros } = props;

  const opcoes = [...estantes].map(estante => {
    return (
      <option
        disabled={atual === estante[1] ? true : false}
        key={estante[1]}
        value={estante[1]}
      >
        {estante[0]}
      </option>
    );
  });

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Mover para ...
        </option>
        {opcoes}
      </select>
    </div>
  );
}

Changer.propTypes = {
  // @param estantes, lista de options a ser exibida como destino.
  estantes: PropTypes.any,
  // @param atual, nome da estante atual do livro.
  atual: PropTypes.string,
  // @param onChangeLivros, função que deve-se chamar quando modificar os livros.
  onChangeLivros: PropTypes.func.isRequired
};

Changer.defaultProps = {
  // caso estantes não seja informada, será utilizado a default do projeto starter.
  estantes: new Map([
    ["Currently Reading", "currentlyReading"],
    ["Want to Read", "wantToRead"],
    ["Read", "read"],
    ["None", "none"]
  ]),
  // caso atual não seja informada, será atribuida none.
  atual: "none"
};

export default Changer;
