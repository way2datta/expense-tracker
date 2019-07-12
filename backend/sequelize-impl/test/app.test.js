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
          res.text.should.be.a("string");
          res.text.should.be.equals("Hello World!");
          done();
        });
    });
  });
  describe("Login", () => {
    it("should send bad request when password is empty", done => {
      chai
        .request(server)
        .post("/login")
        .send({ email: "john@doe.com", password: "" })
        .end((err, res) => {
          res.should.have.status(400);
          res.text.should.be.equals(
            `{"errors":{"password":"Password is required"}}`
          );
          done();
        });
    });
    it("should send bad request when email is empty", function(done) {
      chai
        .request(server)
        .post("/login")
        .send({ email: "", password: "P@ssw0rd" })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("should send OK when user is authenticated", function(done) {
      chai
        .request(server)
        .post("/login")
        .send({ email: "john@doe.com", password: "P@ssw0rd" })
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.equals(
            `{"email":"john@doe.com","password":"P@ssw0rd"}`
          );
          done();
        });
    });
  });
});
