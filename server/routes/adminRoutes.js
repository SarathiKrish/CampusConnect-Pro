const express = require("express");
const router = express.Router();

const Report = require("../models/Report");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");


// ==============================
// GET ALL REPORTS (ADMIN)
// ==============================
router.get("/reports", authMiddleware, async (req, res) => {

  try {

    const reports = await Report.find()
      .populate("post")
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(reports);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


// ==============================
// DELETE POST (ADMIN)
// ==============================
router.delete("/posts/:id", authMiddleware, async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: "Post deleted by admin" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


module.exports = router;