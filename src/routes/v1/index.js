const express = require("express");
const router  = express.Router();
const {create} = require("../../controller/tweetController");
const {createlike} = require("../../controller/likeController");
const {createcomment} = require("../../controller/commentController");
const {signup ,signin} = require("../../controller/userController");
const authenticate = require("../../middleware/passport-middleware");


router.post("/createtweet" , authenticate,create);
router.post("/liketweet", createlike);
router.post("/createcomment" ,createcomment );
router.post("/signup" , signup);
router.post("/signin" , signin);

module.exports = router;