import { Request, Response, Router } from "express";
import { Map, MapSchema } from "../Models/map.model";

/**
 * This map controller will serve the endpoint /api/map
 */
class MapController {
  public mapRouter: Router;

  constructor() {
    this.mapRouter = Router();
    this.route();
  }

  /**
   * GetMap maps to GET /api/map
   * Will get the map from the database
   * @param req Not used
   * @param res Will return the map structure, see map.model
   * @param next Not used
   */
  public getMap(req: Request, res: Response, next) {
    // For more customers, this should find an ID.
    Map.find({}, (err: any, map) => {
      if (err) {
        res.status(500).send(err);
      }
      else{
        res.json(map[0]).send(); // So far, always at place 0
      }
    });
  }

  /**
   * UpdateMap maps to PUT /api/map
   * Will update the database with the new map
   * @param req Body must conatin a new map JSON object
   * @param res Returns status 204 if succesful
   * @param next Not used
   */
  public updateMap(req: Request, res: Response, next) {
    const map = new Map(req.body);

    Map.findOneAndUpdate({}, map, { upsert: true }, (err, map) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(204).send();
    });
  }

  /** Sets the routes for endpoint /api/map  */
  public route() {
    this.mapRouter.get("/", this.getMap);
    this.mapRouter.put("/", this.updateMap);
  }
}

export default new MapController().mapRouter;
