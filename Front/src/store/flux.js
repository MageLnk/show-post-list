import React from "react";

const getState = ({ getStore, setStore }) => {
  return {
    store: {
      input: {},
    },
    actions: {
      probandoReturn: parametro => {
        return <p>Ola k ase</p>;
      },
    },
  };
};

export default getState;
