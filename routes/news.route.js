const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.postNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.patchNews);
router.get("/news/:id", newsController.getNewsById);
router.get("/news", newsController.getAllNews);
router.get("/news/category/:id", newsController.getNewsCategory);

module.exports = router;
