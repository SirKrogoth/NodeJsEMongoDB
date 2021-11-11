//require('dotenv-safe').config();
const { test, expect } = require('@jest/globals');
const database = require('./database');

test('Connectiong Data', async () => {
    const connection = await database.connect();
    expect(connection).toBeTruthy();
});

test('Disconnectiong Database', async () => {
    const isDisconected = await database.disconnect();
    expect(isDisconected).toBeTruthy();
});