const express = require("express");
const router = express.Router();

const Report = require("../models/Report");
const authMiddleware = require("../middleware/authMiddleware");


// ==============================
// REPORT POST
// ==============================
router.post("/:postId", authMiddleware, async (req, res) => {

  try {

    const { reason } = req.body;

    const report = await Report.create({
      post: req.params.postId,
      reportedBy: req.user.id,
      reason
    });

    res.status(201).json(report);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


module.exports = router;