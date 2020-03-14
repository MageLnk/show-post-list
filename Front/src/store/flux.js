const getState = ({ getStore, setStore }) => {
  return {
    store: {
      exampleArray: [
        { title: "Ola", story_title: null },
        { title: "Ola 2", story_title: "Ola k ase" },
        { title: null, story_title: "Ola k ase" },
        { title: "Ola 4", story_title: "Ola k ase" },
        { title: null, story_title: null },
        { title: "Ola 6", story_title: "Ola k ase" },
      ],
    },
    actions: {
      fetchPostList: params => {
        fetch("https://hn.algolia.com/api/v1/search_by_date?query=nodejs").then(res => {
          res
            .json()
            .then(data => {
              setStore({
                data,
              });
            })
            .catch(e => {
              console.log("Error fetch");
            });
        });
      },
    },
  };
};

export default getState;
