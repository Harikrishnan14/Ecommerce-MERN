const express = require('express')
const { registerUser,
    loginUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    getOrderByUserId,
    getAllOrders,
    removeProductFromCart,
    updatedProductQuantityFromCart
} = require('../controllers/userController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()


router.post('/register', registerUser)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)
router.put('/password', authMiddleware, updatePassword)
router.post('/login', loginUser)
router.post('/admin-login', loginAdmin)
router.post('/cart', authMiddleware, userCart)
router.post('/cart/apply-coupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)
router.get('/all-users', getAllUsers)
router.get('/get-orders', authMiddleware, getOrders)
router.get('/get-all-orders', authMiddleware, isAdmin, getAllOrders)
router.post('/get-orders-by-user/:id', authMiddleware, isAdmin, getOrderByUserId)
router.get('/refresh', handleRefreshToken)
router.get("/logout", logout);
router.get('/wishlist', authMiddleware, getWishlist)
router.get('/cart', authMiddleware, getUserCart)
router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/remove-from-cart/:cartItemId', authMiddleware, removeProductFromCart)
router.delete('/update-from-cart/:cartItemId/:newQuantity', authMiddleware, updatedProductQuantityFromCart)
router.delete('/empty-cart', authMiddleware, emptyCart)
router.delete('/:id', deleteUser)
router.put('/update-user', authMiddleware, updateUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)


module.exports = router