var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  //Promisses
  db.findCustomers()
    .then(customers => {
      console.log(customers);
      res.render("index", {title: "Express", customers});
    })
    .catch(error => console.error(error));
});

router.get('/new', function(req, res){
  res.render("customer", {title: "Cadastro de Cliente",  customer: {}});
});

router.get('/edit/:customerId', function(req, res){
  const id = req.params.customerId;
  
  db.findCustomer(id)
    .then(customer => res.render("customer", {title: "Editar Cliente", customer}))
    .catch(error => console.error(error));
});

router.post('/new', function(req, res){
  if(!req.body.nome)
    return res.redirect("/new?error=O campo nome é obrigatório.");
  
  if(req.body.idade && !/[0-9]+/.test(req.body.idade))
    return res.redirect("/new?error=Ocampo idade precisa ser numérico.");
  
  const id = req.body.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const cidade = req.body.cidade;

  const customer = {nome, idade, cidade};
  const promise = id ? db.updateCustomer(id, customer)
                     : db.insertCustomer(customer);
      
  promise
    .then(result => {
      res.redirect("/");
    })
    .catch(error => {
      return console.error(error);
    })

});

module.exports = router;
