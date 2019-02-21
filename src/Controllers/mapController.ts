import { Request, Response, Router } from 'express';

class MapController {
    public mapRouter: Router;

    constructor(){
        this.mapRouter = Router();
        this.route();
    }

    public getMap(req: Request, res: Response, next){
        // TODO Get mapdata from db
        res.send('It works!');
    }

    public updateMap(req: Request, res: Response, next){
        // TODO Update map data in db
        res.status(500);
    }

    public route(){
        this.mapRouter.get('/', this.getMap);
        this.mapRouter.put('/', this.updateMap);
    }
}

export default new MapController().mapRouter;