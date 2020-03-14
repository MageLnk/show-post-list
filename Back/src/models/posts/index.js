const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
  hits: {
    type: Array,
    require: true,
  },
  page: {
    type: Number,
    require,
  },
});

module.exports = Posts;
