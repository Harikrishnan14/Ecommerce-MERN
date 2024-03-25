const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImgs
} = require('../controllers/productController')
const { uploadImg,
    productImgResize
} = require('../middlewares/uploadImagesMiddleware')



router.post('/', authMiddleware, isAdmin, createProduct)
router.put('/upload/:id', authMiddleware, isAdmin, uploadImg.array('images', 10), productImgResize, uploadImgs)
router.get('/:id', getAProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, rating)
router.get('/', getAllProduct)
router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)


module.exports = router