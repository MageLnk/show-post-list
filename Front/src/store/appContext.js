import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  class StoreWrapper extends React.Component {
    constructor(props) {
      super(props);

      //this will be passed as the contenxt value
      this.state = getState({
        getStore: () => this.state.store,
        getActions: () => this.state.actions,
        setStore: updatedStore =>
          this.setState({
            store: Object.assign(this.state.store, updatedStore),
          }),
      });
    }

    componentDidMount() {
      //
    }

    render() {
      // the initial value for the context its not null anymore, but the current state of this component,
      // the context will have a getStore and setStore functions available then, because they were declared
      // on the state of this component
      return (
        <Context.Provider value={this.state}>
          <PassedComponent {...this.props} />
        </Context.Provider>
      );
    }
  }
  return StoreWrapper;
};

export default injectContext;
