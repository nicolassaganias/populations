const { MongoClient } = require('mongodb');

const databaseConfig = require('../config/database')

if (!global.mongoInstance) {
    (async function(){
        global.mongoInstance = new MongoClient(databaseConfig.connectionUri, { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        await global.mongoInstance.connect(err => {
            console.log('Connected successfully to mongo');
          
            const db = global.mongoInstance.db(databaseConfig.databaseName);
            global.mongoInstance.poblaciones = db.collection('poblaciones')
          });
    })()
    
}
