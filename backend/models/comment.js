const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId },
    post: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;