const express = require('express')
require('./db/mongoose')
const User = require('./model/user')
const Tasks = require('./model/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.post('/tasks', (req,res) => {
    const task = new Tasks(req.body)

    task.save().then(()=> {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})