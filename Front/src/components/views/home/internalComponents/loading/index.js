import React from "react";
//Los import de uso de variables en la App
import { Context } from "../../../../../store/appContext";

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import loadingStyle from "./style";

const Loading = () => {
  const styleLoading = loadingStyle();
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        return (
          <div className={styleLoading.container}>
            <span className={styleLoading.loading}>{store.error ? "Server down" : "Loading..."}</span>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Loading;
