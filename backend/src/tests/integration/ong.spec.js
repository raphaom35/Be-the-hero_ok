const request = require("supertest");
const app = require("../../app");
const conection = require("../../database/connection");
describe("ONG", () => {
  //beforeEach(async () => {
  ///  await conection.migrate.latest();
  //});
  //afterAll(async () => {
  // await conection.destroy();
  //});
  it("shoud bo able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD2",
        email: "constato@apad.com.br",
        whatsapp: "45677887898",
        city: "São Paulo",
        uf: "SP"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
