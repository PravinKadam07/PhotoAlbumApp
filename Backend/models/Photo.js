const mongoose = require("mongoose");

const photoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ text: String, user: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
