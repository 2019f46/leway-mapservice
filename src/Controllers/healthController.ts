import { Request, Response, Router } from 'express';

class HealthController {
    public mapRouter: Router;

    constructor() {
        this.mapRouter = Router();
        this.route();
    }

    public getHealth(req: Request, res: Response, next) {
        res.send('Its healthy');
    }

    public route() {
        this.mapRouter.get('/', this.getHealth);
    }
}

export default new HealthController().mapRouter;