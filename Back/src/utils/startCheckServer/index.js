// Save on MongoDB
const Posts = require("../../models/posts");
// Import Utils
const writeRecentData = require("../modifyData/writeRecentData");
const requestDataToOriginServer = require("../requestDataToOriginServer");

const writeDataFromZero = callback => {
  requestDataToOriginServer(callback);
};

Posts.find({})
  .then(resp => {
    if (resp.length === 0) {
      writeDataFromZero((error, { body }) => {
        writeRecentData(body);
      });
    }
  })
  .catch(e => {
    console.log("The service not will working because the main API is down");
  });
