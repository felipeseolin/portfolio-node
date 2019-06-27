const mongoose = require("mongoose");

const FormationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    initialDate: {
        type: String,
        required: true
    },
    finalDate: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Formation", FormationSchema);