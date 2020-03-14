import React from "react";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS

//Importar acá los componentes que llame la app

const Story = () => {
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

export default Story;
