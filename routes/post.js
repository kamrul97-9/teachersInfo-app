//importing dependecies
const express = require('express');
const router = express.Router();

//loading middlewares
//const auth = require("../middlewares/auth");


//importing user logic
const postControlers = require('../controlers/post');

router.get("/compose", postControlers.getComposePost);
router.post("/compose", postControlers.postComposePost);
router.get('/post/:post_id', postControlers.getPost);

router.get('/post/update/:post_id', postControlers.getUpdatePost);
router.post('/post/update/:post_id', postControlers.postUpdatePost);

router.post('/post/delete/:post_id', postControlers.postDeletePost);


module.exports = router;
