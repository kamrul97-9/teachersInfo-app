//jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require('ejs');
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require("passport");
require('dotenv').config()

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));


//database configuration
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));


//load models
const User = require("./models/user");
const Post = require("./models/post");

// importing controllers
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

app.use(userRoutes);
app.use(authRoutes);
app.use(postRoutes);



const PORT = process.env.PORT || 10010;
// if (port == null || port == "") {
//   port = 10010;
// }
app.listen(PORT, () =>{
    // console.log(`This server is running on http://localhost:${port}`);
    console.log(`Server has started Successfully`);
});
