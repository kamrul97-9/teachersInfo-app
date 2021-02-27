const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    address: {
        default: "not set yet",
        type: String,
    },
    education: {
        default: "not set yet",
        type: String,
    },

}, {timestamps: true});

module.exports = mongoose.model("Post", postSchema);
