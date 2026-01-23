const postModel = require("../models/post.model");


class PostService {
    createPost(newPost, userId) {
        return postModel.create({ ...newPost, user : userId });
    }

    getListPostsById() {
        const posts = postModel.find({})
            .populate({
                path: 'user',
                select: 'name email'

            })

        return posts;

    }

    getPostById(post_id) {
        return postModel.findById(post_id);
    }

    deletePostById(post_id) {
        return postModel.findByIdAndDelete(post_id);
    }

    updatePostById(post_id, updateData) {
        return postModel.findByIdAndUpdate(post_id, updateData, {
            new: true,
            runValidators: true

        });
    }

    //lay danh sach bai viet cua 1 user
    getPostsByUserId(userId) {
        return postModel.find({ user: userId })
    }

}

module.exports = new PostService
