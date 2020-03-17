import React from "react";
//Los import de uso de variables en la App
import { Context } from "../../../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import ListPostsContainerStyle from "./style";
import { Grid, List } from "@material-ui/core";
//Importar acá los componentes que llame la app

//Importar constantes
import mapTitles from "../../../../../utils/titleListMap";

const ListPosts = () => {
  const styleContainerListPosts = ListPostsContainerStyle();

  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <Grid className={styleContainerListPosts.main}>
            <List component="nav">{mapTitles(store.data, styleContainerListPosts, actions)}</List>
          </Grid>
        );
      }}
    </Context.Consumer>
  );
};

export default ListPosts;
