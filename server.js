const mongo = require('mongodb').MongoClient;
const client = require('socket.io')(4000).sockets;

// connect to mongodb
mongo.connect('mongodb://127.0.0.1/Chat-App', function(err, db) {
    if (err)
        throw err;
    console.log('Mongodb connected');
});