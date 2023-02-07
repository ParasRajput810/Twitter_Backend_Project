const express = require("express");
const router  = express.Router();

const {create} = require("../../controller/tweetController");
const {createlike} = require("../../controller/likeController");

router.post("/createtweet" , create);
router.post("/liketweet", createlike);

module.exports = router;