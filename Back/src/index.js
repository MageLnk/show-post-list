const express = require("express");
const cors = require("cors");
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
// Server Json Up and Cors
app.use(express.json());
app.use(cors());
// Apis

app.get("/posts", (req, res) => {
  Posts.find({}).then(posts => {
    if (posts.length === 0) {
      res.status(500).send("Server down");
      return;
    }

    PostsDeteled.find({})
      .then(deleted => {
        const postsFix = JSON.stringify(posts);
        const deletedFix = JSON.stringify(deleted);
        const postsObj = JSON.parse(postsFix);
        const deletedObj = JSON.parse(deletedFix);

        if (deletedObj.length === 0) {
          res.status(200).send(postsObj[0].hits);
        } else {
          const arrayFiltered = postsObj[0].hits.filter(originalPosts => {
            const match = deletedObj[0].hits.find(element => {
              if (element.created_at_i === originalPosts.created_at_i) {
                return element.created_at_i;
              }
            });
            if (!match) {
              return originalPosts;
            }
          });
          res.status(200).send(arrayFiltered);
        }
      })
      .catch(e => {
        //console.log(e);
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
          //console.log(e);
          res.status(400).send(e);
        });
    }
  });
});

//
app.listen(port, () => {
  console.log("Server up on port ", port);
});
