//db.js
//A medida que o arquivo for ficando maior, precisamos segregar mais
//Estudar Repository Pattern 
const ObjectId = require("mongodb").ObjectId;
const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017", 
                                                { useUnifiedTopology: true })
                                                .then(connection => {
                                                    global.connection = connection.db("aula02");
                                                    console.log("Conectado na base de dados aula02");
                                                })
                                                .catch(error => console.error(error));

function findCustomers(){
    return global.connection.
                            collection("clientes").
                            find({}).
                            toArray();
}                                     

function insertCustomer(customer){
    return global.connection
                    .collection("clientes")
                    .insertOne(customer);
}

function updateCustomer(id, customer){
    const objectId = new ObjectId(id)

    return global.connection
                    .collection("clientes")
                    .updateOne({_id: objectId}, {$set: customer});
}

function deleteCustomer(id){
    const objectId = new ObjectId(id);

    return global.connection
                    .collection("clientes")
                    .deleteOne({_id: objectId});
}

function findCustomer(id){
    const objectId = new ObjectId(id);

    return global.connection   
                    .collection("clientes")
                    .findOne({_id: objectId});
}

module.exports = { 
    findCustomers, 
    insertCustomer, 
    updateCustomer, 
    deleteCustomer,
    findCustomer
};