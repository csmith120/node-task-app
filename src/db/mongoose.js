const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

//const User = mongoose.model('User', {
//    name: {
//        type: String
//    },
//    age: {
//        type: Number
//    }
//})

//const me = new User({
//    name: 'Christian',
//    age: 18
//})
//
//me.save().then(() =>{
//console.log(me)
//}).catch((error) => {
//    console.log('Error!' ,error)
//})

const Tasks = mongoose.model('Tasks', {
    desription:{ 
        type: String 
    },
    compeleted: {
        type: Boolean
    }
})

const task = new Tasks({
    desription: "plant",
    compeleted: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})