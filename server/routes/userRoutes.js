const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const authMiddleware = require("../middleware/authMiddleware");


// ==============================
// GET LEADERBOARD
// ==============================
router.get("/leaderboard", async (req, res) => {
  try {

    const users = await User.find()
      .sort({ reputation: -1 })
      .limit(10)
      .select("name reputation");

    res.json(users);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ==============================
// GET USER PROFILE
// ==============================
router.get("/profile", authMiddleware, async (req, res) => {
  try {

    const userId = req.user.id;

    const user = await User.findById(userId)
      .select("name email reputation");

    const postCount = await Post.countDocuments({ author: userId });
    const commentCount = await Comment.countDocuments({ author: userId });

    res.json({
      ...user.toObject(),
      posts: postCount,
      comments: commentCount
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;