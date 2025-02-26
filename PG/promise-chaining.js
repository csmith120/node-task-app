require('../src/db/mongoose')
const User = require('../src/model/user')

//User.findByIdAndUpdate('67b5590c6816719288c4e52b', { age: 1}).then((user) => {
//    console.log(user)
//    return User.countDocuments({ age: 1 })
//}).then((result) => {
//    console.log(result)
//}).catch((e) => {
//    console.log(e)
//})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('67b5590c6816719288c4e52b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})