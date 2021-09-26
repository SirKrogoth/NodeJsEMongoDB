const fs = require('fs');

const x = 0; 

async function funcaoAssinc(){

    try{
        const teste = await fs.writeFile('teste.txt', 'Bla bla bla');
        await fs.writeFile('teste2.txt', 'To night i will remember.');

        console.log('Arquivos criados com sucesso!');
    }catch(err){
        console.error(err);
    }
}