const Vacancy = require("../models/Vacancy");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const crypto = require("crypto");
const router = require("../routes/authRoutes");

const createVacancy = async (req, res) => {
  const vacancy = await Vacancy.create(req.body);
  res.status(StatusCodes.CREATED).json({
    msg: "Vacancy has been created",
  });
};

// get all vacancy
const getAllVacancy = async (req, res) => {
  const vacancies = await Vacancy.find({});

  res.status(StatusCodes.OK).json({ vacancies, count: vacancies.length });
};

// update vacancy
const updateVacancy = async (req, res) => {
  const { id: vacancyId } = req.params;

  const vacancy = await Vacancy.findOneAndUpdate({ _id: vacancyId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!vacancy) {
    throw new CustomError.NotFoundError(`Vacancy not found`);
  }

  res
    .status(StatusCodes.OK)
    .json({ vacancy, msg: "Vacancy updated successfully" });
};

// delete vacancy
const deleteVacancy = async (req, res) => {
  const { id: vacancyId } = req.params;
  const vacancy = await Vacancy.findOne({ _id: vacancyId });
  if (!vacancy) {
    throw new CustomError.NotFoundError(`Vacancy not found`);
  }
  await vacancy.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Vacancy removed." });
};

module.exports = {
  createVacancy,
  getAllVacancy,
  updateVacancy,
  deleteVacancy,
};
