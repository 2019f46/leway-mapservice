import { Document, Schema, Model, model } from "mongoose";

/** Coordinate interface, used to define the coordinates of the points in polygons. */
export interface ICoordModel extends Document {
  /** The X coordinate */
  x: Number;
  /** The Y coordinate */
  y: Number;
}

/** Mongoose schema, that follows the ICoordModel interface. */
export var CoordSchema = new Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
});

/** Polygon interface, used to define polygons. */
export interface IPolyModel extends Document {
  /** List of points, that make up the polygon. */
  points: [ICoordModel];
}

/** Mongoose schema, that follows the IPolyModel interface. */
export var PolySchema: Schema = new Schema({
  points: {
    type: [CoordSchema],
    required: true
  }
});

export const polygon: Model<IPolyModel> = model<IPolyModel>(
  "polygon",
  PolySchema
);
