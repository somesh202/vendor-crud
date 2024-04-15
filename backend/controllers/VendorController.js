const Vendor = require("../models/vendorModel");
// creating vendor
exports.createVendor = async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.status(200).json({
    success: true,
    vendor,
  });
};
// get all vendors
exports.getAllVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json({ success: true, vendors });
};
// get vendor details
exports.getVendorDetails = async (req, res) => {
  const vendorsData = await Vendor.findById(req.params.id);
  if (!vendorsData) {
    res.status(500).json({
      success: false,
      message: "Vendor not found",
    });
  }
  res.status(200).json({
    success: true,
    vendorsData,
  });
};
// update vendor
exports.updateVendor = async (req, res) => {
  let vendor = await Vendor.findById(req.params.id);
  if (!vendor) {
    return res.status(500).json({
      success: false,
      message: "Vendor not found",
    });
  }

  vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    vendor,
  });
};
// delete vendor
exports.deleteVendor = async (req, res) => {
  let vendor = await Vendor.findById(req.params.id);
  if (!vendor) {
    return res.status(500).json({
      success: false,
      message: "Vendor not found",
    });
  }
  vendor = await vendor.remove();
  res.status(200).json({
    success: true,
    message: "product deleted",
  });
};
