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
    }
})

module.exports = Tasks