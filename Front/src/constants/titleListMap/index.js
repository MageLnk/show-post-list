import React from "react";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { ListItem, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { FaTrashAlt } from "react-icons/fa";
// La de React, es mantener los componentes limpios, sin lógica más allá de "qué mostrar".
// Por eso, cree una carpeta llamada "constantes", en donde la utilizo para hacer funciones
// cuyo destino sea retornar "Material visual" para el componente padre de React.
// El componente se mantiene limpio, y la lógica se centra acá.
const mapTitles = (data, styles, history) => {
  // La función recibe 3 parámetros. La data, donde viene el array original. El styles, que
  // trae toda la información de como debe verse la data directo desde Material UI. Y finalmente
  // recibe "history", que es un objeto que viene de la vista que provee el router-dom. De forma que
  // puedo cambiar a la página que corresponde al hacer click

  // eslint-disable-next-line
  const filterEmpty = data.hits.filter(data => {
    if (data.story_title || data.title) {
      return data;
    }
  });
  // En esta función e arriba, primero filtro todas las entradas que vienen del array original.
  // De forma que el map, lo hago exclusivamente a lo que se va a mostrar.
  const resultMap = filterEmpty.map((info, index) => {
    console.log("Mapeo", info);

    return (
      <ListItem
        onClick={e => {
          history.push("/story");
        }}
        button
        key={index}
        className={styles.row}
      >
        {!info.story_title ? info.title : info.story_title}
        <ListItemSecondaryAction>
          <span className={styles.date}>{info.created_at}</span>
          <IconButton
            onClick={e => {
              console.log("Ha sido eliminado con éxito");
            }}
          >
            <FaTrashAlt size="1rem" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return resultMap;
};

export default mapTitles;
