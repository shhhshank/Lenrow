const mongoose = require("mongoose")

const interestSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

const Intrested = mongoose.model('Intrested', instrestSchema);

module.exports = Intrested;