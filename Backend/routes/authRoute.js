const express = require('express')
const { registerUser, loginUser, getAllUsers, getUser, deleteUser, updateUser } = require('../controllers/userController')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)


module.exports = router