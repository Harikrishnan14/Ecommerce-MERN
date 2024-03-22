const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist
} = require('../controllers/productController')


router.post('/', authMiddleware, isAdmin, createProduct)
router.get('/:id', getAProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.get('/', getAllProduct)
router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)


module.exports = router