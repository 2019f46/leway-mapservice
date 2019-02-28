import * as request from "supertest";
import app from "../../../src/app";
import { Map } from "../../../src/Models/map.model";
import { stub, mock, sandbox, SinonSandbox, SinonMock, SinonStub } from "sinon";

const mockMap = {
  outerPolygon: { points: [{ x: 0, y: 0 }, { x: 10, y: 10 }] },
  innerPolygon: [
    { points: [{ x: 0, y: 0 }, { x: 2, y: 3 }] },
    { points: [{ x: 7, y: 8 }, { x: 4, y: 5 }] },
    { points: [{ x: 0, y: 0 }, { x: 6, y: 7 }] }
  ]
};

describe("GET /api/map", () => {
  var m: SinonStub;

  beforeAll(() => {
    m = mock(Map).expects("find");
  });

  it("should return 200 OK with correct data", () => {
    m.yields(null, [mockMap]);
    const mm = jest.mock

    return request(app)
      .get("/api/map")
      .expect(200, mockMap);
  });

  it("should return 500 if db fails", () => {
    m.yields(null, [mockMap]);

    request(app)
      .get("/api/map")
      .expect(500);
  });
});

describe("PUT /api/map", () => {
  var m: SinonStub;

  beforeAll(() => {
    m = mock(Map).expects("findOneAndUpdate");
  });

  it("should return OK 204", () => {
    m.yields(null, null);

    request(app)
      .put("/api/map")
      .set(mockMap)
      .expect(204);
  });

  it("should return 500 if db fails", () => {
    m.yields(null, null);

    request(app)
      .put("/api/map")
      .set(mockMap)
      .expect(500);
  });
});
