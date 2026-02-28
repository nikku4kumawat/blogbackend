const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// create & get
router.post("/create", postController.createPost);
router.get("/", postController.getPost);

// reactions
router.post("/like/:id", postController.likePost);
router.post("/dislike/:id", postController.dislikePost);
router.post("/share/:id", postController.sharePost);
router.post("/subscribe/:id", postController.subscribePost);

// comments
router.post("/comment/:id", postController.addComment);
router.delete("/comment/:postId/:commentId", postController.deleteComment);

module.exports = router;