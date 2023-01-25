const express = require("express");
const router = express.Router();

const {
  createVacancy,
  getAllVacancy,
  deleteVacancy,
  updateVacancy,
} = require("../controllers/vacancyController");

router.post("/", createVacancy);
router.get("/", getAllVacancy);
router.put("/:id", updateVacancy);
router.delete("/:id", deleteVacancy);

module.exports = router;
