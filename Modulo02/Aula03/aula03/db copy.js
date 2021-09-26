//db.js
//A medida que o arquivo for ficando maior, precisamos segregar mais
//Estudar Repository Pattern 
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017", 
                                                { useUnifiedTopology: true },
                                                (error, connection) => {
                                                    if(error) return console.error(error);
                                                    else{
                                                        global.connection = connection.db("aula02");
                                                        console.log("Connected");
                                                    }
                                                }); //função assincrona

function findCustomers(callback){
    return global.connection.
                            collection("clientes").
                            find({}).
                            toArray((error, docs) => {
                                callback(error, docs)
                            });
}                                                

module.exports = { findCustomers };