require('../src/db/mongoose')
const User = require('../src/model/user')

User.findByIdAndUpdate('67b5590c6816719288c4e52b', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})