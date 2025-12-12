const express = require("express");
const router = express.Router();

const {
  createAdminGroup,
  createUnitManagerGroup,
  addAdminToGroup,
  addUnitManagerToGroup,
} = require("../controllers/groupController");
const { protect } = require("../middleware/auth");

router.use(protect);

router.post("/admin/create", createAdminGroup);
router.post("/unit/create", createUnitManagerGroup);
router.patch("/admin/:id/add", addAdminToGroup);
router.patch("/unit/:id/add", addUnitManagerToGroup);

module.exports = router;
