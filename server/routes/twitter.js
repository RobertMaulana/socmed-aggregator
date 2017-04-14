const express = require('express');
const router = express.Router();
const twitterController = require("../controllers/twitter_controller");

router.get("/", twitterController.twitterTimeline)
router.post("/search", twitterController.searchTwitterTimeline)
router.post("/", twitterController.postTweet)

module.exports = router
