const express = require("express");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");
const Vote = require("../models/Vote");
const User = require("../models/User");
const Comment = require("../models/Comment");

const router = express.Router();

// Create Post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const newPost = new Post({
      author: req.user.id,
      title,
      content,
      tags
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPVOTE
router.post("/:id/upvote", authMiddleware, async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const existingVote = await Vote.findOne({ user: userId, post: postId });

    if (existingVote)
      return res.status(400).json({ message: "Already voted" });

    await Vote.create({ user: userId, post: postId, type: "upvote" });

    const post = await Post.findById(postId);
    post.upvotes += 1;
    post.score += 2;
    await post.save();

    const author = await User.findById(post.author);
    author.reputation += 5;
    await author.save();

    res.json({ message: "Upvoted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DOWNVOTE
router.post("/:id/downvote", authMiddleware, async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const existingVote = await Vote.findOne({ user: userId, post: postId });

    if (existingVote)
      return res.status(400).json({ message: "Already voted" });

    await Vote.create({ user: userId, post: postId, type: "downvote" });

    const post = await Post.findById(postId);
    post.downvotes += 1;
    post.score -= 1;
    await post.save();

    const author = await User.findById(post.author);
    author.reputation -= 2;
    await author.save();

    res.json({ message: "Downvoted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ADD COMMENT
router.post("/:id/comment", authMiddleware, async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;
    const { content } = req.body;

    const comment = await Comment.create({
      post: postId,
      author: userId,
      content
    });

    // increase post score slightly
    const post = await Post.findById(postId);
    post.score += 1;
    await post.save();

    res.status(201).json(comment);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET COMMENTS FOR A POST
router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id })
      .populate("author", "name email")
      .sort({ score: -1, createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;