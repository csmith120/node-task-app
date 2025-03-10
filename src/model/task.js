const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
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
}, {
    timestamps: true
})

const Tasks = mongoose.model('Tasks', taskSchema)
module.exports = Tasks