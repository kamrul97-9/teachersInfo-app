const express = require('express');
const router = express.Router();

//importing auth controllers
const authControllers = require('../controlers/auth');

router.get('/userlogin', authControllers.getuserLogin);
router.post('/userlogin', authControllers.postuserLogin);

router.get('/usersignup', authControllers.getuserSignup);
router.post('/usersignup', authControllers.postuserSignup);

router.get('/userlogout', authControllers.getuserLogout);

module.exports = router;
