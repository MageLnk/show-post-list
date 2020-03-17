// Save on MongoDB
const Posts = require("../../models/posts");
// Import Utils
const writeRecentData = require("../modifyData/writeRecentData");

Posts.find({})
  .then(resp => {
    if (resp.length === 0) {
      writeRecentData((error, { body }));
    }
  })
  .catch(e => {
    console.log(e);
  });
