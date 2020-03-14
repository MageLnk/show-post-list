const request = require("request");
// Save on MongoDB
const Posts = require("../../models/posts");

const url = "https://hn.algolia.com/api/v1/search_by_date?query=nodejs";

const loopRequestServer = callback => {
  setInterval(() => {
    request({ url, json: true }, (error, res) => {
      if (error) {
        callback("Unable to connect to server", undefined);
      } else {
        callback(undefined, res);
      }
    });
  }, 6000);
};

loopRequestServer((error, { body }) => {
  if (error) {
    return console.log(error);
  }

  Posts.find({}).then(resp => {
    if (!resp) {
      const posts = new Posts(body);
      posts.save();
    } else {
      console.log("Evitando guardar info demás");
      console.log(resp[0]._id);
    }
  });
});
