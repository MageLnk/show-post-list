import React from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS

//Importar acá los componentes que llame la app

const Story = ({ match, history }) => {
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <div>
            <p>story o k ase</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
Story.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
};

export default Story;
