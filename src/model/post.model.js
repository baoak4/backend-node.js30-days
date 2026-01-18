const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            trim: true
        },
        content: {
            type: String,
            require: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft'
        }

    },
    { timestamps: true }

);

module.exports = mongoose.model('Post ', postSchema);
