const mongoose = require('mongoose')
const validator = require('validator')

const Tasks = mongoose.model('Tasks', {
    desription:{ 
        type: String,
        required: true,
        trim: true
    },
    compeleted: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Tasks