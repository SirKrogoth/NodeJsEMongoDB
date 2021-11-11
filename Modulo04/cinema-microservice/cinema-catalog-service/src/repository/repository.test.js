const { test, expect } = require('@jest/globals');
const repository = require('./repository');

let cityId = null;
let cinemaId = null;
let movieId = null;

beforeAll(async () => {
    const cities = await repository.getAllCities();
    cityId = cities[cities.length -1]._id;

    const cinemas = await repository.getCinemasByCityId(cityId);
    cinemaId = cinemas[0]._id;

    movieId = cinemas[0].salas[0].sessoes[0].idFilme;
});

test('getAllCities', async () => {
    const cities = await repository.getAllCities();
    expect(Array.isArray(cities)).toBeTruthy();//verificando se o retorno é um array
    expect(cities.length).toBeTruthy();//verificando se o retorno possui algum "tamanho"
}); 

test('getCinemasByCityId', async () => {
    const cinemas = await repository.getCinemasByCityId(cityId);
    expect(Array.isArray(cinemas)).toBeTruthy();//verificando se o retorno é um array
}); 

test('getMoviesByCinemaId', async () => {
    const movies = await repository.getMoviesByCinemaId(cinemaId);
    expect(movies.length).toBeTruthy();
    expect(Array.isArray(movies)).toBeTruthy();//verificando se o retorno é um array
}); 

test('getMoviesByCityId', async () => {
    const movies = await repository.getMoviesByCityId(cityId);
    expect(movies.length).toBeTruthy();
    expect(Array.isArray(movies)).toBeTruthy();//verificando se o retorno é um array
}); 

test('getMovieSessionsByCityId', async () => {
    const movieSessions = await repository.getMovieSessionsByCityId(movieId, cityId);
    expect(movieSessions.length).toBeTruthy();
    expect(Array.isArray(movieSessions)).toBeTruthy();//verificando se o retorno é um array
}); 

test('getMovieSessionByCinemaId', async () => {
    const movieSessions = await repository.getMovieSessionByCinemaId(movieId, cinemaId);
    expect(movieSessions.length).toBeTruthy();
    expect(Array.isArray(movieSessions)).toBeTruthy();//verificando se o retorno é um array
}); 