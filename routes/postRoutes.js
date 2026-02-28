// routes/postRoutes.js

const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// ✅ Create & Get Post
router.post("/create", postController.createPost);
router.get("/", postController.getPost);

// ✅ Reactions
router.post("/like/:id", postController.likePost);
router.post("/dislike/:id", postController.dislikePost);
router.post("/share/:id", postController.sharePost);
router.post("/subscribe/:id", postController.subscribePost);

// ✅ Comments
router.post("/comment/:id", postController.addComment);
router.delete("/comment/:postId/:commentId", postController.deleteComment);

module.exports = router;