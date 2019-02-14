import { Request, Response, Router } from 'express';

class TestController {
    public testRouter: Router;

    constructor(){
        this.testRouter = Router();
        this.route();
    }

    public testTheController(req: Request, res: Response, next){
        res.send('It works!');
    }

    public route(){
        this.testRouter.get('/', this.testTheController);
    }
}

export default new TestController().testRouter;