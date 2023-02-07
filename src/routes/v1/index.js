const express = require("express");
const router  = express.Router();

const {create} = require("../../controller/tweetController");
const {createlike} = require("../../controller/likeController");
const {createcomment} = require("../../controller/commentController");
router.post("/createtweet" , create);
router.post("/liketweet", createlike);
router.post("/createcomment" ,createcomment );
module.exports = router;