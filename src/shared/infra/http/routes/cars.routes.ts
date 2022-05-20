import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImage/UploadCarImagesController";
import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAutheticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));

const createCarController = new CreateCarController();
const listAvailableCarsUseCase = new ListAvailableCarsController();
const createCarsSpecificationController =
  new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

carsRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsUseCase.hande);

carsRoutes.post(
  "/specifications/:id",
  ensureAutheticated,
  ensureAdmin,
  createCarsSpecificationController.handle
);

carsRoutes.post(
  "/images/:id",
  ensureAutheticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export { carsRoutes };
