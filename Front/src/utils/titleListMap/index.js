import React from "react";

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { ListItem, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { FaTrashAlt } from "react-icons/fa";

const mapTitles = (data, styles) => {
  const moment = require("moment");
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

  const handleClickListItem = () => {
    window.open("/story");
  };

  const resultMap = filterEmpty.map((info, index) => {
    //console.log("Mapeo", info);

    return (
      <ListItem
        key={index}
        onClick={e => {
          handleClickListItem();
        }}
        button
        className={styles.row}
      >
        {!info.story_title ? info.title : info.story_title}
        <span className={styles.author}>- {info.author} - </span>
        <ListItemSecondaryAction>
          <span className={styles.date}>{moment(info.created_at).fromNow()}</span>
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
