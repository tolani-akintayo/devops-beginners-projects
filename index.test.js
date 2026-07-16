const request = require("supertest");
const server = require("./index");

beforeAll((done) => {
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("DevOps Bootcamp Landing Page", () => {
  test("returns HTTP 200", async () => {
    const response = await request(server).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("returns HTML content", async () => {
    const response = await request(server).get("/");

    expect(response.headers["content-type"]).toMatch(/html/);
  });

  test("contains DevOps Bootcamp title", async () => {
    const response = await request(server).get("/");

    expect(response.text).toContain("DevOps Bootcamp");
  });

  test("contains Docker", async () => {
    const response = await request(server).get("/");

    expect(response.text).toContain("Docker");
  });

  test("contains Kubernetes", async () => {
    const response = await request(server).get("/");

    expect(response.text).toContain("Kubernetes");
  });
});