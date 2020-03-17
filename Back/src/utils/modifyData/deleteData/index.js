// Save on MongoDB
const Posts = require("../../../models/posts");

const deleteAllData = () => {
  Posts.deleteOne({})
    .then(() => {})
    .catch(e => {
      console.log(e);
    });
};

module.exports = deleteAllData;
