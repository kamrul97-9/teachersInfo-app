const Post = require('../models/post'); //for getting Post of model
const User = require('../models/user');

exports.getComposePost = async(req, res, next) => {
    //res.render('compose');
    const post = {
        name: "",
        email: "",
        contact: "",
        department: "",
        address: "",
    }  // After post apdate system required, then this(null string) has been set up.
    res.render('compose.ejs', {
      singlePost: post,
      update: false,
      name: "Create New Profile",
    });
};
exports.postComposePost = async(req, res, next) => {
    try {
      const newPost = new Post({
            name: req.body.tname,
            email: req.body.temail,
            contact: req.body.tcontact,
            department: req.body.tdepartment,
            address: req.body.taddress,
        });

       await newPost.save();
       res.redirect("/profile");

       const obj = JSON.parse(JSON.stringify(req.body));
       console.log(obj);

    } catch(err){
        console.log(err);
    }
};

exports.getPost = async(req, res, next) => {
    try {
      const post_id = req.params.post_id;
      const post = await Post.findById(post_id);
      //res.send(post);
      //console.log(post);
      res.render('singlePost', {singlePost: post});
    } catch (error) {
      console.log(error);
    }
};

exports.getUpdatePost = async(req, res, next)=>{
  try {
      const post_id = req.params.post_id;
      const post = await Post.findById(post_id);
        res.render('compose.ejs', {
            singlePost: post,
            update: true,
            name:`Update: ${post.name}`,
        });
  } catch (error) {
    console.log(error);
  }
}

exports.postUpdatePost = async(req, res, next)=>{
  try {
    const update_info = {
            name: req.body.tname,
            email: req.body.temail,
            contact: req.body.tcontact,
            department: req.body.tdepartment,
            address: req.body.taddress,
         };
         const post_id = req.params.post_id;

        await Post.findByIdAndUpdate(post_id, update_info);
        res.redirect("/profile");
  } catch (error) {
    console.log(error);
  }
}

exports.postDeletePost = async(req, res, next)=>{
  try {
      const post_id = req.params.post_id;
      await Post.findByIdAndDelete(post_id);
      res.redirect("back");
  } catch (error) {
    console.log(error);
  }
}
