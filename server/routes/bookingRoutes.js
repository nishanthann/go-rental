import express from "express";
import { changeBookingstatus, checkAvailabilityOfCar, createBooking, getOwnerBooking, getUserBooking } from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";

const bookingRouter =express.Router();

bookingRouter.post("/check-availability",checkAvailabilityOfCar)
bookingRouter.post("/create",protect,createBooking)
bookingRouter.get("/user",protect,getUserBooking)
bookingRouter.get("/owner",protect,getOwnerBooking)
bookingRouter.post("/change-status",protect,changeBookingstatus)

export default  bookingRouter;