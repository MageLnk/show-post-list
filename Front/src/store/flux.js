const getState = ({ getStore, setStore }) => {
  return {
    store: {
      data: [],
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
      fetchPostList: () => {
        fetch("http://localhost:3010/posts").then(res => {
          if (res.status === 500) {
            alert("El servicio no se encuentra disponible. Sentimos las molestias");
            setStore({ error: res.status });
          }
          res
            .json()
            .then(data => {
              setStore({
                data,
              });
            })
            .catch(e => {
              //console.log("Error fetch");
            });
        });
      },
      deleteData: SelectInfo => {
        console.log(SelectInfo);
      },
      returnDataAuthor: match => {
        const store = getStore();
        // eslint-disable-next-line
        const infoToReturn = store.data.filter(data => {
          if (match === data.created_at_i.toString()) {
            return data;
          }
        });

        return infoToReturn;
      },
    },
  };
};

export default getState;
