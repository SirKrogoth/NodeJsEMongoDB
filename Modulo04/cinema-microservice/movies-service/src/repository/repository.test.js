const { test, expect } = require('@jest/globals');
const repository = require('./repository');

let testMovieId = null;

beforeAll(async () => {
    const movies = await repository.getAllMovies();
    testMovieId = movies[0]._id;
});

test('getAllMovies', async () => {
    const movies = await repository.getAllMovies();
    expect(Array.isArray(movies)).toBeTruthy();//verificando se o retorno é um array
    expect(movies.length).toBeTruthy();//verificando se o retorno possui algum "tamanho"
}); 

test('getMovieById', async () => {
    const movie = await repository.getMovieById(testMovieId);
    expect(movie).toBeTruthy();
    expect(movie._id).toEqual(testMovieId);
});

test('getMoviePremiere', async () => {
    const monthAgo = new Date();
    monthAgo.setMonth(-1);

   const movies = await repository.getMoviePremieres(); 
   expect(Array.isArray(movies)).toBeTruthy();
   expect(movies.length).toBeTruthy();
   expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime());
});