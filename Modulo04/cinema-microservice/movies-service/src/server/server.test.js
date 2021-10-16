const { test, expect } = require('@jest/globals');
const server = require('./server');
const request = require('supertest');

const apiMock = jest.fn((app, repository) => true);

test('Server Start', async () => {
    const app = await server.start(apiMock);
    expect(app).toBeTruthy();
});

test('Health Check', async () => {
    process.env.PORT = 3001;
    
    const app = await server.start(apiMock);//inicia o servidor
    const response = await request(app).get('/health');//faz uma chamada http para health
    expect(response.status).toEqual(200);//compara o retorno, se foi 200 está ok
});

test('Server Stop', async () => {
    const isStopped = await server.stop();
    expect(isStopped).toBeTruthy();
});

