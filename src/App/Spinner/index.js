import React, { Fragment } from "react";

const Spinner = props => {
  if (props.ligado) {
    return (
      <div className="ui page modals dimmer transition visible active">
        <div className="ui big text loader">{props.message}</div>
      </div>
    );
  } else {
    return <Fragment />;
  }
};

Spinner.defaultProps = {
  // @param message, texto utilizado no centro do loader.
  message: "Carregando...",
  // @param ligado, controle se renderiza ou não o loader.
  ligado: false
};

export default Spinner;
