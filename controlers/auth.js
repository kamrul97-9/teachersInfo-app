//load models
const User = require("../models/user");

const bcrypt = require('bcrypt');
const passport = require('passport');
const saltRounds = 10;

exports.getuserSignup = (req, res, next) =>{
    res.render('signup');
};

exports.postuserSignup = async(req, res, next) =>{

          //check if user exists.
          const isUserExist = await User.findOne({email: req.body.email});
          if(isUserExist){
              res.send("User with this email already exists.");
              //console.log("User with this credintial already exists.");
              return res.redirect("back");
          };
        bcrypt.hash(req.body.password, saltRounds, async(error, hash) =>{
          const user = new User({
                firstname: req.body.fname,
                lastname: req.body.lname,
                email: req.body.email,
                //password: md5(req.body.pass),
                password: hash
          });
          user.save(function(error){
            if(error) {
                console.log(error);
            } else{
                res.redirect("/home");
            };
        });
      });
  };

exports.getuserLogin = (req, res, next) =>{
    res.render('login');
};

exports.postuserLogin = async(req, res, next) =>{

  //find user by username
  const user = await User.findOne({email: req.body.email});
    //console.log(user);
    if(!user){
        console.log("Error: No user found with this credentials!");
        return res.redirect("back");
    }
    //... fetch user from a db etc
    const domatch = await bcrypt.compare(req.body.password, user.password);
    if(!domatch) {
      console.log("Error: username or password is not valid");
      return res.redirect("back");
    } else {
      res.redirect("/home");
    };
};

exports.getuserLogout = async(req, res, next) => {
    await req.session.destroy();
    res.redirect('/userlogin');
};
