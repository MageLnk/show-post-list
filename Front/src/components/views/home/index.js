import React /*, { useContext } */ from "react";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//import { GlobalState } from '../../../Contexts'
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import "./home.css";
//Importar acá los componentes que llame la app

const Home = props => {
  //const { value } = useContext(GlobalState);
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <div>
            <p>
              Bienvenido. Esta es tu plantilla definitiva. Contiene ContextApi para manejar toda la App, funciones
              globales, variables, states y todo. Y además, tiene un nivel superior de state que viene desde el mismo
              index, con el fin de usarse como un GlobalState específico.
            </p>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Home;
