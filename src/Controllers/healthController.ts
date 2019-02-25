import { Request, Response, Router } from 'express';
import { connection } from 'mongoose';

class HealthController {
    public mapRouter: Router;

    constructor() {
        this.mapRouter = Router();
        this.route();
    }

    public getHealth(req: Request, res: Response, next) {
        let obj: { status: "Disconnected" | "Connected" | "Connecting" | "Disconnecting", statusCode: number } = { status: undefined, statusCode: undefined };

        switch (connection.readyState) {
            case 0:
                obj.status = "Disconnected";
                break;
            case 1:
                obj.status = "Connected"
                break;
            case 2:
                obj.status = "Connecting"
                break;
            default:
                obj.status = "Disconnecting"
                break;
        }

        obj.statusCode = connection.readyState;
        let colls = connection.collections;
        res.send(JSON.stringify(obj));
    }

    public route() {
        this.mapRouter.get('/', this.getHealth);
    }
}

export default new HealthController().mapRouter;

