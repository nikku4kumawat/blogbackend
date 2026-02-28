const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

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