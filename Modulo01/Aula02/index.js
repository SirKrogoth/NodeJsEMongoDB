var modulo = require('./modulo');
var n1 = 5;
var n2 = 8;

if(modulo.somar(n1, n2) === 14){
    console.log('O resultado da soma é : ' + modulo.somar(n1, n2));
}
else{
    console.log('Não foi possível realizar o processo...');
}