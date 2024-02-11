import express from "express";
import { createBike, getBikes, rentBike, cancelRent, rateBike } from "../controllers/bike";

const router = express.Router();

router.post("/bike", createBike);
router.get("/bikes", getBikes);
router.put("/rent_bike/:id", rentBike);
router.put("/cancel_rent/:id", cancelRent);
router.put("/rate_bike/:id", rateBike);

export default router;