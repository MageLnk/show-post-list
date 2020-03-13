import React /*, { useContext } */ from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//import { GlobalState } from '../../../Contexts'
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import "./home.css";
//Importar acá los componentes que llame la app
import Title from "../../home/title";

const Home = ({ match, history }) => {
  //const { value } = useContext(GlobalState);

  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <div>
            <div>
              <Title />
            </div>
            <div>
              <span>Contenido</span>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
Home.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
};
export default Home;
