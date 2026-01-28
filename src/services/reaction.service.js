const reactionModel = require("../models/reaction.model");

class ReactionService {
    like({ post_id, user_id, type }) {
        return reactionModel.create({ type, post_id, user_id });
    }
}

module.exports = new ReactionService();
