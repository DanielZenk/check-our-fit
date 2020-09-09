const functions = require("firebase-functions");

const express = require("express");
const app = express();

const db = require("./util/admin");

const cors = require('cors');

app.use(cors({ origin: true }));

const {
  getAllPosts,
  getMyPosts,
  createPost,
  getPost,
  answerPost,
  deletePost,
} = require("./handlers/posts");
const {
  signup,
  login,
  uploadAvatar,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");
const FBAuth = require("./util/fbAuth");

// Post routes
app.get("/posts", getAllPosts);
app.get("/myPosts", FBAuth, getMyPosts);
app.post("/post", FBAuth, createPost);
app.get("/post/:postId", FBAuth, getPost);
app.post("/post/:postId/answer", FBAuth, answerPost);
app.delete("/post/:postId", FBAuth, deletePost);

//user routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadAvatar);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
