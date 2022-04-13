const Category = require("../models/Category.model");
module.exports.categoriesController = {
  postCategories: async (req, res) => {
    try {
      const data = await Category.create({
        title: req.body.title,
      });
      console.log(req.body);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  deleteCategories: async (req, res) => {
    try {
      const data = await Category.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const data = await Category.find({});
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
