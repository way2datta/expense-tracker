process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./../src/app");
let should = chai.should();

chai.use(chaiHttp);
describe("Routes", () => {
  describe("/GET Index", () => {
    it("should GET plain text", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.a('string');
          res.text.should.be.equals('Hello World!');
          done();
        });
    });
  });
  describe("Login", () => {
    it("should throw an error when validation fails", done => {
      chai
        .request(server)
        .post("/login")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.a('string');
          res.text.should.be.equals('Hello login!');
          done();
        });
    });
  });
});
