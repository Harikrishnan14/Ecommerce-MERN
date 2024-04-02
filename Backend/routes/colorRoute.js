const express = require('express')
const router = express.Router()
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { createColor,
    updateColor,
    deleteColor,
    getAColor,
    getAllColors
} = require('../controllers/colorController')


router.post('/', authMiddleware, isAdmin, createColor)
router.put('/:id', authMiddleware, isAdmin, updateColor)
router.delete('/:id', authMiddleware, isAdmin, deleteColor)
router.get('/:id', getAColor)
router.get('/', getAllColors)


module.exports = router