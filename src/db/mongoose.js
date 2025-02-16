const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error('password cannot contain password (You are not clever)')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    }
})

//const me = new User({
//    name: 'Jim',
//    email: 'TESTEMAIL@Work.com',
//    password: 'LOLFUNNY38',
//    age: 23
//})
//
//me.save().then(() =>{
//console.log(me)
//}).catch((error) => {
//    console.log('Error!' ,error)
//})

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

const task = new Tasks({
    desription: 'to kill a deer'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})