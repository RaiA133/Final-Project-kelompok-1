const express = require("express");
const route = express.Router();
const postController = require("../controllers/postController");
const middlewares = require("../middlewares");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/img/user_postingan");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // 2MB limit
});

route.get("/post", middlewares.verifyToken, postController.getPost);
route.get("/post/mine", middlewares.verifyToken, postController.getYourPost);

route.get("/post/category/:post_category", middlewares.verifyToken, postController.getPostByCategory);
route.get("/post/tags/:post_tags", middlewares.verifyToken, postController.getPostByTags);
route.get("/post/terbaru", middlewares.verifyToken, postController.getPostByTerbaru);
route.get("/post/terlama", middlewares.verifyToken, postController.getPostByTerlama);
route.get("/post/:id", middlewares.verifyToken, postController.getPostById);
route.post("/post/create", middlewares.verifyToken, upload.single("file"), (req, res, next) => {
  const fileName = req.file.filename;
  postController.createPostingan(req, res, next, fileName); // mengirim nama file yg sama ke userController.updateProfile
});
route.put("/post/update/:id", middlewares.verifyToken, upload.single("file"), (req, res, next) => {
  const fileName = req.file.filename;
  postController.updatePostingan(req, res, next, fileName); // mengirim nama file yg sama ke userController.updateProfile
});
route.delete("/post/delete/:id", middlewares.verifyToken, postController.deletePostingan);

module.exports = route;
