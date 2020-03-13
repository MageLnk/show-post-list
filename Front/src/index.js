import React /*, { useState }*/ from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
// Pasando el global context para el resto, en caso de necesitar un state en nivel superior al contextApi
import { GlobalState } from "./globalState";
// Css Index para llamar la librería CSS que haga falta, o setear valores visuales globales, como los padding básicos
import "./index.css";

const AppFinal = () => {
  //const [ejemplo, setEjemplo] = useState('Este es el stateGlobal de ejemplo');
  return (
    <GlobalState.Provider
    //value={{ value, setValue }}
    >
      <Layout />
    </GlobalState.Provider>
  );
};

ReactDOM.render(<AppFinal />, document.getElementById("root"));
