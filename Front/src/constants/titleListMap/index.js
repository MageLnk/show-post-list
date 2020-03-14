import React from "react";
//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { ListItem, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { FaTrashAlt } from "react-icons/fa";

const mapTitles = (arrayInfo, styles, history) => {
  const resultMap = arrayInfo.map((info, index) => {
    return (
      <ListItem
        onClick={e => {
          history.push("/story");
        }}
        button
        key={index}
        className={styles.row}
      >
        {info.clave}

        <ListItemSecondaryAction>
          <span className={styles.date}>Otra info</span>
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
