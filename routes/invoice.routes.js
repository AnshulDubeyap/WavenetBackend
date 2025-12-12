const express = require("express");
const router = express.Router();

const {
  createInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoices,
} = require("../controllers/invoiceController");
const { protect } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/authorize");

router.use(protect);

router.post("/", authorizeRoles("ADMIN", "UNIT_MANAGER", "USER"), createInvoice);
router.get("/", getInvoices);
router.patch("/:invoiceNumber", updateInvoice);
router.delete("/", deleteInvoices);

module.exports = router;
