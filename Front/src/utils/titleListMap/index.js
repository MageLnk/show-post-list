import React from "react";

//Importar acá la librería CSS (Como boostrap), o el propio CSS
import { ListItem, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { FaTrashAlt } from "react-icons/fa";

const mapTitles = (data, styles, actions) => {
  const moment = require("moment");

  // eslint-disable-next-line
  const filterEmpty = data.filter(data => {
    if (data.story_title || data.title) {
      return data;
    }
  });

  const handleClickListItem = params => {
    window.open(`/story/${params}`);
  };

  const resultMap = filterEmpty.map((info, index) => {
    return (
      <ListItem
        key={index}
        onClick={e => {
          handleClickListItem(info.created_at_i);
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
              actions.deleteData(info);
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
