import React /*, { useContext } */ from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//import { GlobalState } from '../../../Contexts'
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Container } from "@material-ui/core";
import homeStyle from "./style";

//Importar acá los componentes que llame la app
import Title from "../../home/title";

const Home = ({ match, history }) => {
  //const { value } = useContext(GlobalState);
  const styleHome = homeStyle();
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <Container className={styleHome.container}>
            <Title />
            <div>
              <span>Contenido</span>
            </div>
          </Container>
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
