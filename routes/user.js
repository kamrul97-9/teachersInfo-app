//importing dependecies
const express = require('express');
const router = express.Router();

//importing user logic
const userControllers = require('../controlers/user');

router.get("/", userControllers.getLandingPage);

router.get("/home", userControllers.getHomePage);

router.get("/profile", userControllers.getProfilePage);

router.get("/contact", userControllers.getContactPage);
router.get("/about", userControllers.getAboutPage);
router.get("/userpage", userControllers.getuserPage);
router.get("/policy", userControllers.getPolicyPage);

module.exports = router;
