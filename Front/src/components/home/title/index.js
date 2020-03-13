import React from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App

//Importar acá la librería CSS (Como boostrap), o el propio CSS

//Importar acá los componentes que llame la app

const Title = props => {
  return (
    <div>
      <h1>HN Feed</h1>
      <span>We &lt;3 hacker news!</span>
    </div>
  );
};

Title.propTypes = {};

export default Title;
