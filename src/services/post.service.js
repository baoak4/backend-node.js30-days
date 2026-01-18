const postModel = require("../model/post.model");


class PostService {
    createPost(newPost) {
        return postModel.create(newPost);
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

}

module.exports = new PostService
