const express = require("express");
// Import conexion to DB
require("./db/moongose");
// Import Api conexion

// Import Utils
require("./utils/compareServer");
require("./utils/startCheckServer");
// Import models
const Posts = require("./models/posts");
const PostsDeteled = require("./models/postsDeleted");
// Server Up
const app = express();
const port = process.env.PORT || 3010;
// Server Json Up
app.use(express.json());
// Apis

app.get("/posts", (req, res) => {
  Posts.find({}).then(posts => {
    PostsDeteled.find({})
      .then(deleted => {
        const postsFix = JSON.stringify(posts);
        const deletedFix = JSON.stringify(deleted);
        const postsObj = JSON.parse(postsFix);
        const deletedObj = JSON.parse(deletedFix);
        const ArrayFiltered = postsObj[0].hits.filter(originalPosts => {
          if (deletedObj[0].hits.length === 0) {
            return originalPosts;
          }
          if (deletedObj[0].hits[0].created_at_i === originalPosts.created_at_i) {
            deletedObj[0].hits.shift();
          } else {
            deletedObj[0].hits.shift();
            return originalPosts;
          }
        });
        res.status(200).send(ArrayFiltered);
      })
      .catch(e => {
        console.log(e);

        res.status(500).send();
      });
  });
});

//
app.post("/posts", (req, res) => {
  PostsDeteled.find({}).then(deleted => {
    if (deleted.length === 0) {
      const postsDeleted = new PostsDeteled(req.body);
      postsDeleted
        .save()
        .then(() => {
          res.status(201).send(postsDeleted);
        })
        .catch(e => {
          res.status(400).send(e);
        });
    } else {
      const deletedFix = JSON.stringify(deleted);
      const deletedObj = JSON.parse(deletedFix);
      let finalObject = deletedObj[0];
      finalObject.hits.push(req.body.hits[0]);

      PostsDeteled.deleteOne({})
        .then(() => {})
        .catch(e => {
          res.status(500).send();
        });
      const postsDeleted = new PostsDeteled(finalObject);
      postsDeleted
        .save()
        .then(() => {
          res.status(201).send(postsDeleted);
        })
        .catch(e => {
          res.status(400).send(e);
        });
    }
  });
});

//
app.listen(port, () => {
  console.log("Server up on port ", port);
});
