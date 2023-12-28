// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let server;

  before((done) => {
    server = app.listen(7865, () => {
      done();
    });
  });

  after(() => {
    server.close();
  });

  it('(a) Test for GET / exists', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.not.equal(404); // Ensure that the route exists
      done();
    });
  });

  it('(b) Test for GET / returns "Welcome to the payment system" exists', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
