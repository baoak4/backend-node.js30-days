const express = require('express');
const postControllers = require('../controllers/post.controller');
const router = express.Router();

router.post('/create', postControllers.createPost);

router.get('/listPosts', postControllers.getListPosts);

router.get('/listPostById/:post_id', postControllers.getPostById)

router.delete('/deletePostById/:post_id', postControllers.deletePostById);

router.put('/updatePostById/:post_id', postControllers.updatePostById);

module.exports = router;
