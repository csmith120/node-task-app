const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//app.use((req, res, next) => {
//    if (req.method === 'GET') {
//        res.send('GET requst are disabled')
//    } else {
//        next()
//    }
//})

app.use((req, res, next) => {
    
    res.status(503).send('server is under mataines please try again later')
    
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})

//const jwt = require('jsonwebtoken')

const myFunction = async () => {
    //const token = jwt.sign({ _id: 'abc123' }, 'thisisatest', { expiresIn: '7 days' })
    //console.log(token)
//
    //const data = jwt.verify(token, 'thisisatest')
    //console.log(data)
}

myFunction()