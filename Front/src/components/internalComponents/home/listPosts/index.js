import React from "react";
import PropTypes from "prop-types";
//Los import de uso de variables en la App
import { Context } from "../../../../store/appContext";

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import ListPostsContainerStyle from "./style";
import { Grid, List } from "@material-ui/core";
//Importar acá los componentes que llame la app

//Importar constantes
import mapTitles from "../../../../constants/titleListMap";

const ListPosts = ({ history }) => {
  const styleContainerListPosts = ListPostsContainerStyle();

  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <Grid>
            <List component="nav">{mapTitles(store.exampleArray, styleContainerListPosts, history)}</List>
          </Grid>
        );
      }}
    </Context.Consumer>
  );
};
ListPosts.propTypes = {
  history: PropTypes.object.isRequired,
};
export default ListPosts;
