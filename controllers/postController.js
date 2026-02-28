// controllers/postController.js

const Post = require("../models/Post");

// ✅ Create first post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    });

    await newPost.save();
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Post creation failed" });
  }
};

// ✅ Get a post
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findOne();
    if (!post) return res.status(404).json({ message: "No post found" });

    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

// ✅ Like a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.likes += 1;
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error liking post" });
  }
};

// ✅ Dislike a post
exports.dislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.dislikes += 1;
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error disliking post" });
  }
};

// ✅ Share a post
exports.sharePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.shares += 1;
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error sharing post" });
  }
};

// ✅ Subscribe to a post
exports.subscribePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.subscribers += 1;
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error subscribing post" });
  }
};

// ✅ Add comment
exports.addComment = async (req, res) => {
  try {
    const { name, text } = req.body;
    if (!name || !text) return res.status(400).json({ message: "Name & text required" });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ name, text });
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error adding comment" });
  }
};

// ✅ Delete comment
exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const originalLength = post.comments.length;
    post.comments = post.comments.filter(
      (c) => c._id.toString() !== req.params.commentId
    );

    if (post.comments.length === originalLength) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(500).json({ message: "Error deleting comment" });
  }
};