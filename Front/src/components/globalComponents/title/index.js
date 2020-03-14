import React from "react";
import PropTypes from "prop-types";
//Los dos import de uso de variables en la App

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { Grid, Typography } from "@material-ui/core";
import titleStyle from "./style/index";
//Importar acá los componentes que llame la app

const Title = ({ title }) => {
  const styleTitle = titleStyle();
  return (
    <Grid className={styleTitle.container}>
      <Grid>
        <Typography className={styleTitle.titlePage}>{title}</Typography>
      </Grid>
      <Grid>
        <Typography className={styleTitle.subTitle}>We &lt;3 hacker news!</Typography>
      </Grid>
    </Grid>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
