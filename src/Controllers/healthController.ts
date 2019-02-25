import { Request, Response, Router } from 'express';
import * as terminus from "@godaddy/terminus";
import { Mongoose, mongo } from 'mongoose';
import { MapSchema } from "../Models/map.model";

class HealthController {
    public mapRouter: Router;

    constructor() {
        this.mapRouter = Router();
        this.route();
    }

    public getHealth(req: Request, res: Response, next) {
        res.send(MapSchema);
    }

    public route() {
        this.mapRouter.get('/', this.getHealth);
    }
}

export default new HealthController().mapRouter;

