const login = require("./login");
const { test, expect, beforeAll } = require("@jest/globals");

/**
 * Load the env from .env
 */
require('dotenv').config()

/**
 * Before all the test we log in the user and receive a JWT token.
 * We will be going to use the token for authentication and authorization
 */
let token = null;

beforeAll(async () => {
    token = await login();
    console.log(token);
});

test('test', async () => {
    expect(0).toBe(0);
});
