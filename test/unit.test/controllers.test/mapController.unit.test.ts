import * as request from "supertest";
import app from "../../../src/app";
import { Map as m } from "../../../src/Models/map.model";
import mockingoose from "mockingoose";

const mockMap = {
  _id: "507f191e810c19729de860ea",
  outerPolygon: {
    _id: "507f191e810c19729de860eb",
    points: [
      { _id: "507f191e810c19729de860aa", x: 0, y: 0 },
      { _id: "507f191e810c19729de860ab", x: 10, y: 10 }
    ]
  },
  innerPolygon: [
    {
      _id: "507f191e810c19729de860ec",
      points: [
        { _id: "507f191e810c19729de860ac", x: 0, y: 0 },
        { _id: "507f191e810c19729de860ad", x: 2, y: 3 }
      ]
    },
    {
      _id: "507f191e810c19729de860ed",
      points: [
        { _id: "507f191e810c19729de860ae", x: 7, y: 8 },
        { _id: "507f191e810c19729de860af", x: 4, y: 5 }
      ]
    },
    {
      _id: "507f191e810c19729de860ee",
      points: [
        { _id: "5c7d38d0db58d935347c967d", x: 0, y: 0 },
        { _id: "5c7d38d0db58d935347c967c", x: 6, y: 7 }
      ]
    }
  ]
};

describe("GET /api/map", () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  it("should return 200 OK", () => {
    mockingoose.Map.toReturn([mockMap], "find");

    return request(app)
      .get("/api/map")
      .expect(200);
  });

  it("should return the correct data", () => {
    mockingoose.Map.toReturn([mockMap], "find");

    return request(app)
      .get("/api/map")
      .then(res => {
        expect(JSON.parse(res.text)).toEqual(mockMap);
      });
  });

  it("should return 500 if db fails", () => {
    mockingoose.Map.toReturn(new Error("meme"), "find");

    return request(app)
      .get("/api/map")
      .expect(500);
  });
});

describe("PUT /api/map", () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  it("should return OK 204", () => {
    mockingoose.Map.toReturn(mockMap, "findOneAndUpdate");

    return request(app)
      .put("/api/map")
      .set(mockMap)
      .expect(204);
  });

  it("should return 500 if db fails", () => {
    mockingoose.Map.toReturn(new Error("meme"), "findOneAndUpdate");

    return request(app)
      .put("/api/map")
      .set(mockMap)
      .expect(500);
  });
});
