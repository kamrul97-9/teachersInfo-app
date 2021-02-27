//load models
const Post = require('../models/post');
const User = require('../models/user');

exports.getLandingPage = (req, res, next) => {
    res.render('landing');
};

exports.getHomePage = (req, res, next) => {
    res.render('home');
};

exports.getProfilePage = async(req, res, next) => {
    //res.render('profile');
    try {
    const posts = await Post.find();
    res.render("profile", { posts: posts });
  } catch (error) {
    console.log(error.message);
    res.redirect("back");
  }
};

exports.getContactPage = (req, res, next) => {
    res.render('contact');
};
exports.getAboutPage = (req, res, next) => {
    res.render('about');
};

exports.getuserPage = async(req, res, next) => {
    try {
        const user = await User.find({ userId: req.params.userId });
        res.json(user);
        res.render('user.ejs',{ user:user });
    }
    catch (error) {
        console.log(error);
    }
    
};

exports.getPolicyPage = (req, res, next) => {
    res.render('policy');
    // res.send('This is policy page')
};
