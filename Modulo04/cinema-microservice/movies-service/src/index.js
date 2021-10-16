const movies = require('./api/movies');
const repository = require('./repository/repository');
const server = require('./server/server');

//Este método abaixo é para auto chamar-se
(async () => {
    try{
        await server.start(movies, repository);
    }
    catch(error){
        console.error(error);
    }
})();
