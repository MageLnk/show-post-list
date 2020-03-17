import React, { useEffect } from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Container, Grid, Typography } from "@material-ui/core";
import storyStyle from "./style";
//Importar acá los componentes que llame la app
import Title from "../../globalComponents/title";

let actionsContext = null;
let storeContext = null;
const Story = ({ match }) => {
  useEffect(() => {
    if (storeContext.data.length === 0) {
      actionsContext.fetchPostList();
    }
  }, []);
  const styleStory = storyStyle();
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        storeContext = store;
        actionsContext = actions;
        const infoAuthor = actions.returnDataAuthor(match.params.created_at_i);
        console.log(infoAuthor);

        return (
          <Container className={styleStory.container}>
            <Title title={store.data.length === 0 ? "Loading..." : infoAuthor[0].author} />
            <Grid>
              <Grid>
                <Typography className={styleStory.subTitle}>Comentarios:</Typography>
              </Grid>
              <Grid>
                <Typography className={styleStory.comments}>
                  {store.data.length === 0 ? "Loading..." : infoAuthor[0].comment_text}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </Context.Consumer>
  );
};
Story.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Story;

/*

La idea es que, cuando la data tenga ID, agregarle a esta vista un ID del post.

Entonces, cuando se abra esta vista, en title ejecute una función que se guarde en utils que pase el ID que capta desde el match.params haciendo el match.
Lo mismo ocurre con el post como tal, que por ahora, es el ola k ase

*/
