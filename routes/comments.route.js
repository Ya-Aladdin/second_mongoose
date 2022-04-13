const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comment", commentsController.postComment);
router.delete("/comment/:id", commentsController.deleteCommentById);
router.get("/comments/news/:id", commentsController.getNewsComments);
router.get("/comments", commentsController.getAllComments);

module.exports = router;
