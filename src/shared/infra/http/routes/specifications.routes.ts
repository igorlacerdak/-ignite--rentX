import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";

import { ensureAutheticated } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAutheticated);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
