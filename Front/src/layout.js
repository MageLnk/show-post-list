import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Los siguientes import es para el contextApi.
import injectContext from "./store/appContext.js";
// Los siguientes import son para algún cambio visual en caso de necesitarse.

// Los siguientes import son los componentes de las vistas
import Home from "./components/views/home";
import Story from "./components/views/story";
// Los siguientes import son especiales, como un token o algo así.

const Layout = props => {
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/story" component={Story} />
          <Route exact path="/" component={Home} />
          <Route render={() => <h1>Error 404!</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
