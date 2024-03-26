const mongoose = require('mongoose');



const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    interested: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Intrested' 
    }]
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;