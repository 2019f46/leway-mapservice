import * as express from "express";
import * as bodyParser from "body-parser";
import mapRouter from "./Controllers/mapController";
import healthRouter from "./Controllers/healthController";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Setup routes
        this.setRoutes();
    }

    /** Sets the routers to their designated routes */
    private setRoutes(): void {
        this.app.use('/api/map', mapRouter);
        this.app.use('/api/health', healthRouter);
    }
}

export default new App().app;