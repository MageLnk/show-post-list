import React from "react";

const getState = ({ getStore, setStore }) => {
  return {
    store: {
      exampleArray: [{ clave: "Ola" }, { clave: "Ola 2" }, { clave: "Ola 3" }, { clave: "Ola 4" }, { clave: "Ola 5" }],
    },
    actions: {
      fetchPostList: params => {
        const store = getStore();
        fetch("https://hn.algolia.com/api/v1/search_by_date?query=nodejs").then(res => {
          res
            .json()
            .then(data => {
              console.log(data);
            })
            .catch(e => {
              console.log("Error");
            });
        });
      },
    },
  };
};

export default getState;
