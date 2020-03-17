import React from "react";
import ReactDOM from "react-dom";
// Importar componente principal
import Layout from "./layout";
// Css Index para llamar la librería CSS que haga falta, o setear valores visuales globales, como los padding básicos
import "./index.css";

const AppFinal = () => {
  //const [data, setData] = useState([]);
  return <Layout />;
};

ReactDOM.render(<AppFinal />, document.getElementById("root"));
