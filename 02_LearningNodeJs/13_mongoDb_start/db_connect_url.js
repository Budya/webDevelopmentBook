var MongoClient = require('mongodb').MongoClient;

var Server = require('mongodb').Server;


var client = new MongoClient('mongodb://localhost:27017/', 
{useUnifiedTopology: true, poolSize: 5});

client.connect(function(err, db){
    if(err){
        console.log("Connection Failed Via Client Object.");
    } else {
        console.log("Connected Via Client Object . . .");
        // db.logout(function(err, result){
        //     if(!err){
        //         console.log("Logged out Via Client Object . . .");
        //     }
        //     db.close();
        //     console.log("Connection closed . . . ");
        // })
        console.log('Do some work')
        db.close();
        console.log("Connection closed . . . ");
    }
})