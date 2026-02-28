// models/Post.js

const mongoose = require("mongoose");

// ✅ Comment schema
const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ Post schema
const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  subscribers: {
    type: Number,
    default: 0
  },
  comments: [commentSchema]
});

module.exports = mongoose.model("Post", postSchema);