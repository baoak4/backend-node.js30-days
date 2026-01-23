const express = require('express');
const postControllers = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middlewares');
const authorizeRoles = require('../middlewares/authorize.diddleware');
const router = express.Router();

router.post('/create', authMiddleware, authorizeRoles('admin'), postControllers.createPost);

router.get('/listPosts', postControllers.getListPosts);

router.get('/listPostById/:post_id', postControllers.getPostById)

router.delete('/deletePostById/:post_id', postControllers.deletePostById);

router.put('/updatePostById/:post_id', postControllers.updatePostById);

router.get('/getPostsByUserId', authMiddleware, postControllers.getPostsByUserId);

module.exports = router;
