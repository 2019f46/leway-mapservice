import * as express from "express";
import * as bodyParser from "body-parser";
import mapRouter from "./Controllers/mapController";
import healthRouter from "./Controllers/healthController";

/**
 * MAP SERVICE
 * The Map Service will enable you to get and update the store map.
 * It has two endpoints:
 * - /api/map
 *   Here you can GET the map, and PUT an updated one.
 * - /api/health
 *   Here you can monitor the status of the service, and the db connection.
 */
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