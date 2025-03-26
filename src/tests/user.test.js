const request = require("supertest");
const app = require("../index");
const { sequelize, User } = require("../models/user");

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reset DB before tests
});

describe("Bulk CRUD API", () => {
  it("should insert multiple records", async () => {
    const res = await request(app).post("/api/bulk-insert").send([
      { name: "Test1", email: "test1@example.com", age: 30 },
      { name: "Test2", email: "test2@example.com", age: 25 },
    ]);
    expect(res.status).toBe(201);
    expect(res.body.data.length).toBe(2);
  });

  it("should fetch all records", async () => {
    const res = await request(app).get("/api/bulk-fetch");
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(2);
  });
});

afterAll(async () => {
  await sequelize.close(); // Close DB connection
});
