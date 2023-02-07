const express = require("express");
const router  = express.Router();

const {create} = require("../../controller/tweetController");

router.post("/createtweet" , create);

module.exports = router;