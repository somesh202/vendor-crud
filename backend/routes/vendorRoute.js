const express = require("express");
const {
  getAllVendors,
  createVendor,
  updateVendor,
  deleteVendor,
  getVendorDetails,
} = require("../controllers/VendorController");
const userRouter = express.Router();
userRouter.route("/vendors").get(getAllVendors);
userRouter.route("/vendor/create-vendor").post(createVendor);
userRouter
  .route("/vendor/:id")
  .put(updateVendor)
  .delete(deleteVendor)
  .get(getVendorDetails);
module.exports = userRouter;
