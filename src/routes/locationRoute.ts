import {
  getLocations,
  createLocation,
  getLocation
} from "../controllers/locationController";

import { Router } from "express";
const locationRouter = Router();

locationRouter.post("/locations", createLocation);
locationRouter.get("/locations", getLocations);
locationRouter.get("/locations/:id", getLocation);

export { locationRouter };
