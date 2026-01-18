const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        age: {
            type: Number,
            min: 1,
            max: 120
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);
