import React from "react";
//Los dos import de uso de variables en la App
import { Context } from "../../../store/appContext";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Container, Grid } from "@material-ui/core";
import storyStyle from "./style";
//Importar acá los componentes que llame la app
import Title from "../../globalComponents/title";

const Story = () => {
  const styleStory = storyStyle();
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <Container className={styleStory.container}>
            <Title title={"Author"} />
            <Grid>
              <Grid>
                <span>Ola k ase, post o k ase</span>
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </Context.Consumer>
  );
};

export default Story;

/*

La idea es que, cuando la data tenga ID, agregarle a esta vista un ID del post.

Entonces, cuando se abra esta vista, en title ejecute una función que se guarde en utils que pase el ID que capta desde el match.params haciendo el match.
Lo mismo ocurre con el post como tal, que por ahora, es el ola k ase

*/
