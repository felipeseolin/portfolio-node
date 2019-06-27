const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    description: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: false
    },
    imgPath: {
        type: String,
        require: false
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Project", ProjectSchema);