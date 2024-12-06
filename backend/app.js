require("dotenv").config();
const express = require("express");
const database = require("./config/config");
const Post = require("./models/postModel");
const User = require("./models/userModel");
const passport = require("passport");
const cors = require("cors");
const localSrategy = require("passport-local");
const session = require("express-session");
const { isLoggedIn } = require("./middleware/middleware");
const wrapAsync = require("./utils/wrapAsync");
const app = express();
const { storage, cloudinary } = require("./config/cloudConfig");
const multer = require("multer");
const upload = multer({ storage });
const port = 3000;

const sessionOptions = {
  secret: "mysecretkey",
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["get", "post", "delete", "put", "patch"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "pragma",
    ],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(session(sessionOptions));
app.use(passport.session());
passport.use(new localSrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/instagram", async (req, res) => {
  const posts = await Post.find({}).populate("user");
  res.send(posts);
});
app.get("/instagram/user", async (req, res) => {
  res.status(200).json(req.user);
});
app.post(
  "/instagram/signup",
  wrapAsync(async (req, res, next) => {
    let { username, email, password } = req.body;
    const newUser = new User(req.body);
    const registerUser = await User.register(newUser, password);
    req.login(registerUser, async (err) => {
      if (err) {
        return next(err);
      }
      console.log(newUser);
      res.status(200).json(registerUser);
    });
  })
);

app.post("/instagram/login", passport.authenticate("local"), (req, res) => {
  console.log("welcome,you logged in successfully");
  console.log(req.user);
  res.status(200).json(req.user);
});

app.post(
  "/instagram/post",
  isLoggedIn,
  upload.array("image", 12),
  wrapAsync(async (req, res) => {
    console.log("request come");
    console.log("files", req.files);
    console.log("body", req.body);
    const { image, caption, user, likes, comments } = req.body;
    const imgs = req.files.map((file) => ({
      imgUrl: file.path,
      fileName: file.filename,
    }));
    console.log("imgs", imgs);
    const post = {
      user: "674cab8c7ac1b2bfc645dc48",
      caption: caption,
      image: imgs,
    };
    const newPost = new Post(post);
    const savedPost = await newPost.save();

    res.send(savedPost);
  })
);

app.get("/instagram/logout", (req, res, next) => {
  req.logOut((err) => {
    return next(err);
  });
  res.send("you are logOut now");
});

app.use((err, req, res, next) => {
  let { status = 400, message = "something went wrong" } = err;
  console.log(err);
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
