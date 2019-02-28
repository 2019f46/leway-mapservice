import { Document, Schema, Model, model } from "mongoose";
import { IPolyModel, PolySchema } from "./polygon.model";

export interface IMapModel extends Document {
  outerPolygon: IPolyModel
  innerPolygon: [IPolyModel]
}

export const MapSchema: Schema = new Schema({
  outerPolygon: {
    type: PolySchema,
    required: true
  },
  innerPolygon: {
    type: [PolySchema],
    required: true
  }
});

export const Map: Model<IMapModel> = model<IMapModel>("Map", MapSchema);