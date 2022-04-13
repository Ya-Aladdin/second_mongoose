const Comment = require("../models/Comment.model");
module.exports.commentsController = {
  postComment: async (req, res) => {
    try {
      const { commentator, text, newsId } = req.body;
      const data = await Comment.create({
        commentator,
        text,
        newsId,
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      const data = await Comment.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getNewsComments: async (req, res) => {
    try {
      const data = await Comment.find({ newsId: req.params.id }).populate(
        "newsId"
      );
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getAllComments: async (req, res) => {
    try {
      const data = await Comment.find({}).populate("newsId");
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
