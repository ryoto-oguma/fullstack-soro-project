const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../server");

chai.use(chaiHttp);

describe("Health Check", () => {
  it("xxx", async () => {
    const res = await chai.request(app).get("/");
    expect(res).have.status(200);
    expect(res.text).to.equal("ok");
  });
});
