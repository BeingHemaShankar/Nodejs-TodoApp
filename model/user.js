var mongoose = require('mongoose');


const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: false
    }
}, {
});

module.exports = mongoose.model('Todo', TodoSchema);