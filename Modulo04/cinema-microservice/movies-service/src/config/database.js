const MongoClient = require('mongodb').MongoClient;
let client = null;

async function connect(){
    if(!client)
        client = new MongoClient(process.env.MONGO_CONNECTION);

    await client.connect();//A partir da versao 4 ele verifica automaticamente se está connectado, caso contrario ele sai
    return client.db(process.env.DATABASE);
}

async function disconnect(){
    if(!client) return true;

    await client.close();
    client = null;
    return true;
}

module.exports = {
    connect,
    disconnect
};