import { Schema, Document, model } from "mongoose";

export interface ICoordModel extends Document{
    x: Number
    y: Number
}

let CoordSchema = new Schema({
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