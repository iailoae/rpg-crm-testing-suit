const login = require("./login");
const { test, expect, beforeAll } = require("@jest/globals");


/**
 * Before all the test we log in the user and recive a JWT token.
 * We will going to use the token for authentication and authorization
 */
let token = null;

beforeAll(async () => {
    token = await login();
    console.log(token);
});

test('test', async () => {
    expect(0).toBe(0);
});
