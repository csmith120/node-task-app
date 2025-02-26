require('../src/db/mongoose')
const Tasks = require('../src/model/task')

//Tasks.findByIdAndDelete('67be0fe6a27877414456640c').then((tasks) => {
//    console.log(tasks)
//    return Tasks.countDocuments({ compeleted: false })
//}).then((result) => {
//    console.log(result)
//}).catch((e) => {
//    console.log(e)
//})

const deleteTaskAndCount = async (id, age) => {
    const task = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({ compeleted: false })
    return count
}

deleteTaskAndCount('67bf6056427c7652084c6554').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})