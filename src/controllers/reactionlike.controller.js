const reactionService = require("../services/reaction.service");


class ReactionController {
    async like(req, res, next) {
        try {
            // const post_id = req.body.post_id;
            // const type = req.body.type;// lay tu oject
            const { post_id, type } = req.body;// tu oject ra
            const { userId } = req.user;
            const result = await reactionService.like (post_id, type, userId);
        } catch (error) {

        }
    }
}

module.exports = new ReactionController();
