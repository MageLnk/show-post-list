// Save on MongoDB
const Posts = require("../../models/posts");
// Import Utils
const writeRecentData = require("../modifyData/writeRecentData");
const requestDataToOriginServer = require("../requestDataToOriginServer");

const loopRequestServer = callback => {
  setInterval(() => {
    requestDataToOriginServer(callback);
  }, 3600000);
};

loopRequestServer((error, { body }) => {
  if (error) {
    return console.log(error);
  }
  Posts.deleteOne({})
    .then(() => {})
    .catch(e => {
      console.log(e);
    });
  writeRecentData(body);
});
