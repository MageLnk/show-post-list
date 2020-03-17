const getState = ({ getStore, setStore, getActions }) => {
  return {
    store: {
      data: [],
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
      deleteData: selectInfo => {
        const actions = getActions();
        const sendInfo = { hits: [selectInfo] };
        fetch("http://localhost:3010/posts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendInfo),
        }).then(resp => {
          resp
            .json()
            .then(res => {
              //console.log("res", res);
            })
            .catch(e => {
              //console.log(e);
            });
        });
        actions.fetchPostList();
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
