// Save on MongoDB
const Posts = require("../../models/posts");
// Import Utils
const writeRecentData = require("../modifyData/writeRecentData");
const requestDataToOriginServer = require("../requestDataToOriginServer");
const deleteAllData = require("../modifyData/deleteData");

const loopRequestServer = callback => {
  setInterval(() => {
    requestDataToOriginServer(callback);
  }, 3600000);
};

loopRequestServer((error, { body }) => {
  if (error) {
    return console.log(error);
  }
  deleteAllData();
  writeRecentData(body);
});
