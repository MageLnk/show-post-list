const mongoose = require("mongoose");
// Mongoose es una librería que permite trabajar o "conectarte" con un mongoDB.
// Este archivo en concreto, y la siguiente línea, lo que hace es conectarse
// con DB de mongo.
mongoose.connect("mongodb://127.0.0.1:27017/posts", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
