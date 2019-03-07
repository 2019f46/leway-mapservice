import { Document, Schema, Model, model } from "mongoose";
import { IPolyModel, PolySchema } from "./polygon.model";

/** Map model interface.
 * Contains the outerpolygon, which will define the boundaries of the store (walls),
 * and inner polygons, which is a list of polygons inside the store (shelves)
 */
export interface IMapModel extends Document {
  /** The outer boundatires of the store, i.e. the walls. */
  outerPolygon: IPolyModel
  /** The inner polygons. A list of all the polygons inside the store, i.e. the shelves. */
  innerPolygon: [IPolyModel]
}

/** Mongoose schema, that follows the IMapModel interface */
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