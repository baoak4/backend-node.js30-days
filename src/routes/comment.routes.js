const express = require('express');
const commentController = require('../controllers/comment.controller');
const commentValidator = require('../validations/comment.validator');
const authMiddleware = require('../middlewares/auth.middlewares');
const validate = require('../middlewares/validate.middlewares');
const router = express.Router();

router.post(
    '/create',
    authMiddleware,
    commentValidator.createCommentValidator,
    validate,
    commentController.createComment
);
router.delete('/deleteCommetById/:comment_id', commentController.deleteCommentById);
router.put('/updateCommentById/:comment_id', commentController.updateCommentById);
router.get('/getCommentById/:comment_id', commentController.getCommentById);

// nhiều thằng con endpoint
module.exports = router;
