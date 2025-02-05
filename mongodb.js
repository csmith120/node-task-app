// Crud create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    //db.collection('users').findOne({ _id: new ObjectID("67a3b1507ba2ee501c8b539a") }, (error, user) => {
    //    if (error) {
    //        return console.log('couldnt find user!')
    //    }
//
    //    console.log(user)
    //})

    //db.collection('users').find({ age: 27 }).toArray((error, users) =>{
    //    console.log(users)
    //})

    db.collection('tasks').findOne({ _id: new ObjectID("67a273ce1a9cd985a0c4efd6") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray ((error, tasks) => {
        console.log(tasks)
    })

})