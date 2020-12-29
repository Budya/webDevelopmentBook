var MongoClient = require('mongodb').MongoClient;

var client = new MongoClient('mongodb://localhost:27017/', 
{useUnifiedTopology: true });

client.connect(function(err, data){
    
    if(err){
        console.log('some err: ' + err);
    }
    var adminDb = data.db('admin');
    console.log(adminDb)
    
});