import * as express from "express";
import * as bodyParser from "body-parser";
import testRouter from "./Controllers/testController";
import mapRouter from "./Controllers/mapController";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));


        // Setup routes
        this.setRoutes();
    }

    private setRoutes(): void{
        this.app.use('/api/test', testRouter);
        this.app.use('api/map', mapRouter);
    }
}

export default new App().app;