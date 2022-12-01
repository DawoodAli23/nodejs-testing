const request = require("supertest");
const app = require("../app");

describe("Testing the base route", () => {
  test("GET METHOD", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        // console.log(response.text, response.body);
        expect(response.text).toBe("Hello World!");
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
