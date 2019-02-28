import { Document, Schema, Model, model } from "mongoose";

export interface ICoordModel extends Document{
    x: Number
    y: Number
}

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

export interface IPolyModel extends Document{
    points: [ICoordModel]
}

export var PolySchema: Schema = new Schema({
  points: {
    type: [CoordSchema],
    required: true
  }
});

export const polygon: Model<IPolyModel> = model<IPolyModel>("polygon", PolySchema);