const Post = require("../models/Post");

// create first post
exports.createPost = async (req, res) => {
  const Post = require("../models/Post");

  try {
    const newPost = new Post({
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    });

    await newPost.save();

    res.json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Post creation failed" });
  }
};

// get post
exports.getPost = async (req, res) => {
  const post = await Post.findOne();
  res.json(post);
};

// like post
exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes++;
  await post.save();
  res.json(post);
};

// 👎 Dislike
exports.dislikePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.dislikes += 1;
  await post.save();
  res.json(post);
};

// 📤 Share
exports.sharePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.shares += 1;
  await post.save();
  res.json(post);
};

// 🔔 Subscribe
exports.subscribePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.subscribers += 1;
  await post.save();
  res.json(post);
};

// add comment
exports.addComment = async (req, res) => {
  const { name, text } = req.body;
  const post = await Post.findById(req.params.id);

  post.comments.push({ name, text });
  await post.save();

  res.json(post);
};

// delete comment
exports.deleteComment = async (req, res) => {
  const post = await Post.findById(req.params.postId);

  post.comments = post.comments.filter(
    (c) => c._id.toString() !== req.params.commentId,
  );

  await post.save();
  res.json(post);
};
