const { db } = require("../util/admin");

exports.getAllPosts = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(posts);
    })
    .catch((err) => console.error(err));
};

exports.getMyPosts = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  db.collection("posts")
    .where("handle", "==", req.user.handle)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(posts);
    })
    .catch((err) => console.error(err));
};

exports.createPost = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const newPost = {
    handle: req.user.handle,
    createdAt: new Date().toISOString(),
    questions: [],
    totalResponses: 0,
    userImage: req.user.imageUrl
  };

  //console.log(req);
  console.log(req.user);
  const parsedBody = JSON.parse(req.body);
  const questions = parsedBody.questions;
  questions.forEach((question) => {
    const newQuestion = {};
    newQuestion.questionText = question.questionText;
    newQuestion.answers = {};
    question.answers.forEach((answer, index) => {
      newQuestion.answers[index] = {};
      newQuestion.answers[index].answerText = answer;
      newQuestion.answers[index].timesAnswered = 0;
    });
    newQuestion.totalResponses = 0;
    newPost.questions.push(newQuestion);
  });

  db.collection("posts")
    .add(newPost)
    .then((doc) => {
      const postId = doc.id;
      return res.json({ message: `Post ${doc.id} created successfully`, postId });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "something went wrong" });
    });
};

exports.getPost = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let postData = {};
  db.doc(`/posts/${req.params.postId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post not found" });
      }
      postData = doc.data();
      postData.postId = doc.id;
      return res.json(postData);
    });
};

exports.answerPost = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const answerDocument = db
    .collection("answeredPosts")
    .where("userHandle", "==", req.user.handle)
    .where("postId", "==", req.params.postId)
    .limit(1);

  const postDocument = db.doc(`/posts/${req.params.postId}`);

  const answers = JSON.parse(req.body).answers;

  console.log(answers);

  let postData;
  postDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        postData = doc.data();
        postData.postData = doc.id;
        return answerDocument.get();
      } else {
        return res.status(404).json({ error: "This post no longer exists" });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection("answeredPosts")
          .add({
            postId: req.params.postId,
            userHandle: req.user.handle,
          })
          .then(() => {
            postData.totalResponses++;
            answers.forEach((answer, index) => {
              postData.questions[index].totalResponses++;
              postData.questions[index].answers[answer].timesAnswered++;
            });   
            return postDocument.update({ questions: postData.questions, totalResponses: postData.totalResponses });
          })
          .then(() => {
            return res.json(postData);
          });
      } else {
        return res.status(400).json({ error: "Post already answered" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

//Delete post
exports.deletePost = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const document = db.doc(`/posts/${req.params.postId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post does not exist" });
      }
      if (doc.data().handle !== req.user.handle) {
        return res
          .status(403)
          .json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Post deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
