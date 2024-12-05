const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    type: { type: String, enum: ["like", "comment", "follow"], required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }, // Only for likes/comments
  },
  { timestamps: true }
);

const notification = mongoose.model("Notification", notificationSchema);
module.exports = notification;
