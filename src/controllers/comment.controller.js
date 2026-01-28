const { json } = require("express");
const commentService = require("../services/comment.service");

class CommentController {
    async createComment(req, res, next) {
        try {
            const { postId, content } = req.body;
            const { userId } = req.user;
            const result = await commentService.createComment({ userId: userId, postId: postId, content: content });
            return res.status(201).json({ message: "Comment created", data: result });
        } catch (e) {
            next(e);
        }
    }

    async deleteCommentById(req, res, next) {
        try {
            const comment_id = req.params.comment_id;
            const result = await commentService.deleteCommentById(comment_id);
            res.status(200).json({ message: "Comment delete successfully", data: result });
        } catch (e) {
            next(e);
        }
    }
    async updateCommentById(req, res, next) {
        try {
            const comment_id = req.params.comment_id;
            const updateData = req.body;
            const result = await commentService.updateCommentById(comment_id, updateData);
            return res.status(200).json({ message: "Comment update successfully", data: result });
        } catch (e) {
            next(e);
        }
    }
    async getCommentById(req, res, next) {
        try {
            const comment_id = req.params.comment_id;
            const result = await commentService.getCommentById(comment_id);
            res.status(200).json({ message: "Get comment successfully", data: result});//lay du lieu data tra ra kieu du lieu oject
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CommentController();
