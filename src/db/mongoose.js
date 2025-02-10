const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Mike',
    email: 'Mike'
})

me.save().then(() =>{
console.log(me)
}).catch((error) => {
    console.log('Error!' ,error)
})

const Tasks = mongoose.model('Tasks', {
    desription:{ 
        type: String 
    },
    compeleted: {
        type: Boolean
    }
})

//const task = new Tasks({
//    desription: "plant",
//    compeleted: true
//})
//
//task.save().then(() => {
//    console.log(task)
//}).catch((error) => {
//    console.log('Error!', error)
//})