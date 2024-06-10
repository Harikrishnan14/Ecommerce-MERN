const express = require("express");
const { uploadImgs, deleteImgs } = require("../controllers/uploadController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImagesMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImgs);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImgs);


module.exports = router;