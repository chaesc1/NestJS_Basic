import exp from "constants";
import { Cat, CatType } from "./cats.model";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

import { Router } from "express";

const router = Router();
router.get("/cats", readAllcat);
router.get("/cats/:id", readCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);
export default router;
