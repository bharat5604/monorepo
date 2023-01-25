const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const VacancySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  description: {
    content: {
      type: String,
      required: [true, "Please provide description"],
    },
    numberOfVacancy: {
      type: Number,
      required: [true, "Please provide Number of Vacancy"],
    },
    salary: {
      type: Number,
      required: [true, "Please provide Salary"],
    },
    qualification: {
      type: String,
      required: [true, "Please provide Qualification"],
    },
    feeGeneralObc: {
      type: Number,
      required: [true, "Please provide Fees for General/OBC"],
    },
    feeOther: {
      type: Number,
      required: [
        true,
        "Please provide Fees for SC/ST/EWS or Physically Challenged",
      ],
      lastDate: {
        type: Date,
        required: [true, "please provide last apply date"],
      },
    },
  },
});

module.exports = mongoose.model("Vacancy", VacancySchema);
