import React from "react";
import { useHistory } from "react-router-dom";

//Los import de uso de variables en la App
import { Context } from "../../../../../store/appContext";

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import ListPostsContainerStyle from "./style";
import { Grid, List } from "@material-ui/core";
//Importar acá los componentes que llame la app

//Importar constantes
import mapTitles from "../../../../../utils/titleListMap";

const ListPosts = () => {
  const history = useHistory();

  const styleContainerListPosts = ListPostsContainerStyle();

  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <Grid>
            <List component="nav">{mapTitles(store.data, styleContainerListPosts, history)}</List>
          </Grid>
        );
      }}
    </Context.Consumer>
  );
};

export default ListPosts;
