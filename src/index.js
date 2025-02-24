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

app.get('/users', (req, res) => {
    User.find({}).then((users) =>{
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id

    User.findById(_id).then((user) =>{
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
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

app.get('/tasks', (req, res) => {
    Tasks.find({}).then((task) =>{
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req,res) => {
    const _id = req.params.id

    Tasks.findById(_id).then((task) =>{
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.listen(port, () => {
    console.log('server is up on port ' + port)
})