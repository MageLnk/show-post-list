const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
  hits: {
    type: Array,
    require: true,
  },
});

module.exports = Posts;
