import React, { useEffect } from "react";
//Los import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Container } from "@material-ui/core";
import homeStyle from "./style";
//Importar acá los componentes que llame la app
import Title from "../../globalComponents/title";
import ListPosts from "./internalComponents/listPosts";
import Loading from "./internalComponents/loading";

let actionsContext = null;
let storeContext = "";

const Home = () => {
  useEffect(() => {
    if (storeContext.data.length === 0) {
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
          <Container disableGutters className={styleHome.container}>
            <Title title={"HN Feed"} />

            {store.data.length === 0 ? <Loading /> : <ListPosts />}
          </Container>
        );
      }}
    </Context.Consumer>
  );
};

export default Home;
