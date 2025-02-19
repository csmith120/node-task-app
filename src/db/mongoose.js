const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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
