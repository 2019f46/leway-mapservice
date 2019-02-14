import * as request from "supertest";
import app from "../../../src/app";

describe("GET /api/test", () => {

  it("should return 200 OK", () => {
    return request(app).get("/api/test").expect(200);
  });
});