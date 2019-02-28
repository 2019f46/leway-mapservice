import { Request, Response, Router } from "express";
import { Map, MapSchema } from "../Models/map.model";

class MapController {
  public mapRouter: Router;

  constructor() {
    this.mapRouter = Router();
    this.route();
  }

  public getMap(req: Request, res: Response, next) {
    // For more customers, this should find an ID.
    Map.find({}, (err: any, map) => {
      if (err) {
        res.status(500).send(err);
      }
      else{
        res.send(map[0]); // So far, always at place 0
      }
    });
  }

  public updateMap(req: Request, res: Response, next) {
    const map = new Map(req.body);

    Map.findOneAndUpdate({}, map, { upsert: true }, (err, map) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(204).send();
    });
  }

  public route() {
    this.mapRouter.get("/", this.getMap);
    this.mapRouter.put("/", this.updateMap);
  }
}

export default new MapController().mapRouter;
