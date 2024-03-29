const { db, admin } = require("../util/admin");

const firebase = require("firebase");

const firebaseConfig = require("../util/config");

firebase.initializeApp(firebaseConfig);

const {
  validateSignupData,
  validateLoginData,
  reduceUserDetails,
} = require("../util/validators");

//signup for an account
exports.signup = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const parsedBody = JSON.parse(req.body);
  const newUser = {
    email: parsedBody.email,
    password: parsedBody.password,
    confirmPassword: parsedBody.confirmPassword,
    handle: parsedBody.handle,
  };

  const { valid, errors } = validateSignupData(newUser);

  if (!valid) return res.status(400).json(errors);

  const noImg = "no-img.png";

  let token, userId;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ handle: "this handle is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
        userId,
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email already in use" });
      }
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    });
};

//login to an account
exports.login = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let user = {};
  //temp workaround of Postman struggling with stringify
  if (typeof req.body === "string") {
    user = {
      email: JSON.parse(req.body).email,
      password: JSON.parse(req.body).password,
    };
  } else {
    user = {
      email: req.body.email,
      password: req.body.password,
    };
  }

  const { valid, errors } = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        return res.status(403).json({
          general:
            "Credentials do not match an existing user, please try again",
        });
      }
      return res.status(500).json({ error: err.code });
    });
};

//add optional user details
exports.addUserDetails = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let userDetails = reduceUserDetails(req.body);

  if (Object.keys(userDetails).length === 0) {
    return res.json({ message: "No details to be added" });
  }

  db.doc(`/users/${req.user.handle}`)
    .update(userDetails)
    .then(() => {
      return res.json({ message: "Details added successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

//get own user details
exports.getAuthenticatedUser = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let userData = {};
  db.doc(`/users/${req.user.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.credentials = doc.data();
        return db
          .collection("answeredPosts")
          .where("userHandle", "==", req.user.handle)
          .get();
      }
    })
    .then((data) => {
      userData.answeredPosts = [];
      data.forEach((doc) => {
        userData.answeredPosts.push(doc.data());
      });
      return res.json(userData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

//upload an avatar for a user
exports.uploadAvatar = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");

  const busboy = new BusBoy({ headers: req.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const splitFilename = filename.split(".");
    if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
      return res
        .status(400)
        .json({ error: "Only file type of jpeg and png permitted" });
    }
    const imageExtension = splitFilename[splitFilename.length - 1];
    imageFileName = `${Math.round(
      Math.random() * 100000000
    )}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);

    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket(`${firebaseConfig.storageBucket}`)
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
      })
      .then(() => {
        return res.json({
          message: "Image uploaded successfully",
          url: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`,
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  });
  busboy.end(req.rawBody);
};
