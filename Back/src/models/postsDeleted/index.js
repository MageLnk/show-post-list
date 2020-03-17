const mongoose = require("mongoose");

const PostsDeteled = mongoose.model("PostsDeleted", {
  hits: {
    type: Array,
    require: true,
  },
});

module.exports = PostsDeteled;
