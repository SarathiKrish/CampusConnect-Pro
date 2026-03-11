const express = require("express");
const router = express.Router();

const Notification = require("../models/Notification");
const authMiddleware = require("../middleware/authMiddleware");


// ==============================
// GET USER NOTIFICATIONS
// ==============================
router.get("/", authMiddleware, async (req, res) => {

  try {

    const notifications = await Notification.find({
      user: req.user.id
    })
    .sort({ createdAt: -1 });

    res.json(notifications);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


// ==============================
// MARK NOTIFICATION AS READ
// ==============================
router.put("/:id/read", authMiddleware, async (req, res) => {

  try {

    const notification = await Notification.findById(req.params.id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    notification.read = true;
    await notification.save();

    res.json({ message: "Notification marked as read" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


module.exports = router;