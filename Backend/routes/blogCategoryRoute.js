const express = require('express')
const router = express.Router()
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { createBlog,
    updateBlog,
    deleteBlog,
    getABlog,
    getAllBlog,
} = require('../controllers/blogCategoryController')


router.post('/', authMiddleware, isAdmin, createBlog)
router.put('/:id', authMiddleware, isAdmin, updateBlog)
router.delete('/:id', authMiddleware, isAdmin, deleteBlog)
router.get('/:id', getABlog)
router.get('/', getAllBlog)


module.exports = router