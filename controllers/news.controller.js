const News = require("../models/News.model");
module.exports.newsController = {
  postNews: async (req, res) => {
    try {
      const { title, text, categoryId } = req.body;
      const data = await News.create({
        title,
        text,
        categoryId,
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  deleteNews: async (req, res) => {
    try {
      const data = await News.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  patchNews: async (req, res) => {
    try {
      const { title, text, categoryId } = req.body;
      const data = await News.findByIdAndUpdate(req.params.id, {
        title,
        text,
        categoryId,
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const data = await News.findById(req.params.id).populate("categoryId");
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getAllNews: async (req, res) => {
    try {
      const data = await News.find({}).populate("categoryId");
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getNewsCategory: async (req, res) => {
    try {
      const data = await News.find({ categoryId: req.params.id });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
