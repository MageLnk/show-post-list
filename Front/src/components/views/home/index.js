import React, { useEffect } from "react";
import PropTypes from "prop-types";
//Los import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Container } from "@material-ui/core";
import homeStyle from "./style";
//Importar acá los componentes que llame la app
import Title from "../../internalComponents/home/title";
import ListPosts from "../../internalComponents/home/listPosts";
import Loading from "../../internalComponents/home/loading";

let actionsContext = null;
let storeContext = null;

const Home = ({ match, history }) => {
  useEffect(() => {
    if (!storeContext.data) {
      actionsContext.fetchPostList();
    }
  }, []);

  const styleHome = homeStyle();
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        storeContext = store;
        actionsContext = actions;
        return (
          <Container className={styleHome.container}>
            <Title />

            {!store.data ? <Loading /> : <ListPosts history={history} />}
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
