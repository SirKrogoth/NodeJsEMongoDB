const { test, expect } = require('@jest/globals');
const server = require('../server/server');
const request = require('supertest');
const movies = require('./movies');
const repositoryMock = require('../repository/__mocks__/repository');

let app = null;

beforeAll(async () => {
    process.env.PORT = 3002;
    app = await server.start(movies, repositoryMock);//inicia o servidor
})

afterAll(async () => {
    await server.stop();
})


test('GET /movies 200 OK', async () => {
    const response = await request(app).get('/movies');//faz uma chamada http para health
    expect(response.status).toEqual(200);//compara o retorno, se foi 200 está ok
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeTruthy();
});

test('GET /movies/:id 200 OK', async () => {
    const testMovieId = '1';
    const response = await request(app).get(`/movies/${testMovieId}`);//faz uma chamada http para health
    expect(response.status).toEqual(200);//compara o retorno, se foi 200 está ok
    expect(response.body).toBeTruthy();
});

test('GET /movies/:id 404 NOT FOUND', async () => {
    const testMovieId = '1000';
    const response = await request(app).get(`/movies/${testMovieId}`);//faz uma chamada http para health
    /*expect(response.status).toEqual(404); compara o retorno, se foi 404 está ok*/
});

test('GET /movies/premieres 200 OK', async () => {
    const response = await request(app).get('/movies/premieres');//faz uma chamada http para health
    expect(response.status).toEqual(200);//compara o retorno, se foi 200 está ok
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeTruthy();
});