// Save on MongoDB
const Posts = require("../../../models/posts");
// Other Utils

const writeRecentData = body => {
  Posts.find({})
    .then(() => {
      const posts = new Posts(body);
      posts.save();
    })
    .catch(e => {
      console.log(e);
    });
};

module.exports = writeRecentData;
