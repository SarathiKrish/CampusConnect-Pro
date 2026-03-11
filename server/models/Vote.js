const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  type: { type: String, enum: ["upvote", "downvote"] }
}, { timestamps: true });

module.exports = mongoose.model("Vote", voteSchema);