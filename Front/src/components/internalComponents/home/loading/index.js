import React from "react";
//Los dos import de uso de variables en la App

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import loadingStyle from "./style";

const Loading = () => {
  const styleLoading = loadingStyle();
  return (
    <div className={styleLoading.container}>
      <span className={styleLoading.loading}>Loading post list...</span>
    </div>
  );
};

export default Loading;
