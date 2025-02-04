// Crud create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    //db.collection('users').insertOne({
    //    name: 'task',
    //    age: '18'
    //}, (error, result) => {
    //    if (error) {
    //        return console.log('Unable to insert user')
    //    }

    //    console.log(result.ops)
    //})

    //db.collection('users').insertMany([
    //    {
    //        name: 'Jen',
    //        age: 23
    //    }, {
    //        name: 'mike',
    //        age: 27
    //    }
    //], (error, result) => {
    //    if (error) {
    //        return console.log('unable to insert documents')
    //    }

    //    console.log(result.ops)
    //})

    db.collection('tasks').insertMany([
        {
            description: 'lemon code',
            completed: true
        },
        {
            description: 'lime code',
            completed: true
        },
        {
            description: 'gpa code',
            completed: false
        },
    ], (error, result) => {
        if (error) {
            return console.log('unable to insert documents')
        }

        console.log(result.ops)
    })
})