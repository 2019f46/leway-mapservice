import { Request, Response, Router } from 'express';
import { Map, MapSchema } from '../Models/map.model';

class MapController {
    public mapRouter: Router;

    constructor() {
        this.mapRouter = Router();
        this.route();
    }

    public getMap(req: Request, res: Response, next) {
        // TODO Get mapdata from db
        let data = {
            outerPolygon: { polygon: [{ x: 0, y: 0 }, { x: 0, y: 650 }, { x: 800, y: 650 }, { x: 800, y: 0 }] },
            innerPolygon: [
                {
                    polygon: [
                        { x: 50, y: 150 }, { x: 150, y: 150 }, { x: 175, y: 75 }, { x: 150, y: 100 }, { x: 50, y: 100 }, { x: 25, y: 75 }]
                },
                {
                    polygon: [
                        { x: 250, y: 50 }, { x: 300, y: 50 }, { x: 300, y: 150 }, { x: 250, y: 150 }]
                },
                {
                    polygon: [
                        { x: 50, y: 200 }, { x: 350, y: 200 }, { x: 350, y: 350 }, { x: 50, y: 350 }]
                },
                {
                    polygon: [
                        { x: 450, y: 150 }, { x: 750, y: 150 }, { x: 755, y: 75 }, { x: 450, y: 100 }]
                },
                {
                    polygon: [
                        { x: 450, y: 350 }, { x: 700, y: 550 }, { x: 600, y: 600 }, { x: 450, y: 400 }]
                },
                {
                    polygon: [
                        { x: 50, y: 500 }, { x: 350, y: 500 }, { x: 350, y: 400 }, { x: 50, y: 400 }]
                },
                {
                    polygon: [
                        { x: 400, y: 250 }, { x: 750, y: 260 }, { x: 750, y: 300 }, { x: 750, y: 500 }]
                },
            ]
        };
        let test = new Map(data);
        Map.create(test).then(item => {
            item.save();
        });
        res.send('It works!');
    }

    public updateMap(req: Request, res: Response, next) {
        // TODO Update map data in db
        res.status(500);
    }

    public route() {
        this.mapRouter.get('/', this.getMap);
        this.mapRouter.put('/', this.updateMap);
    }
}

export default new MapController().mapRouter;