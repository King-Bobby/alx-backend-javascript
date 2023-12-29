// 10-api/api.test.js
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

  describe('Cart page', () => {
    it('(c) Correct status code when :id is a number?', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('(d) Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // New test suites
  describe('Available Payments', () => {
    it('(e) Correct response for GET /available_payments?', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('Login', () => {
    it('(f) Correct response for POST /login?', (done) => {
      const requestData = {
        userName: 'Betty'
      };
      request.post(
        {
          url: 'http://localhost:7865/login',
          json: requestData
        },
        (error, response, body) => {
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });
  });
});
