import { Request, Response, Router } from "express";
import { connection } from "mongoose";

/**
 * The health controller will display the health status of the service.
 * Contains all functions for endpoint /api/health
 * The service is down if anything else than status 200 is returned.
 * The controller will check the database connection status, and return JSON object with this information.
 */
class HealthController {
  public mapRouter: Router;

  constructor() {
    this.mapRouter = Router();
    this.route();
  }

  /**
   * getHealth maps to GET /api/health.
   * Checks the db status.
   * @param req Not used
   * @param res Returns a JSON object
   * @param next Not used
   */
  public getHealth(req: Request, res: Response, next) {
    let obj: {
      status: "Disconnected" | "Connected" | "Connecting" | "Disconnecting";
      statusCode: number;
    } = { status: undefined, statusCode: undefined };

    switch (connection.readyState) {
      case 0:
        obj.status = "Disconnected";
        break;
      case 1:
        obj.status = "Connected";
        break;
      case 2:
        obj.status = "Connecting";
        break;
      default:
        obj.status = "Disconnecting";
        break;
    }

    obj.statusCode = connection.readyState;
    res.send(JSON.stringify(obj));
  }

  /** Sets the routes for the /api/health endpoint */
  public route() {
    this.mapRouter.get("/", this.getHealth);
  }
}

export default new HealthController().mapRouter;