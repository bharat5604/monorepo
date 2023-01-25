const Course = require('../models/Course')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createCourse = async (req, res) => {
  const course = await Course.create(req.body)
  res.status(StatusCodes.CREATED).json({
    msg: 'Course has been created',
  })
}

const getAllCourse = async (req, res) => {
  const courses = await Course.find({})

  res.status(StatusCodes.OK).json({ courses, count: courses.length })
}

const getSingleCourse = async (req, res) => {
  const { id: courseId } = req.params
  const course = await Course.find({ _id: courseId })

  if (!course) {
    throw new CustomError.NotFoundError(`Course with given id is not available`)
  }

  res.status(StatusCodes.OK).json(course[0])
}

const updateCourse = async (req, res) => {
  const { id: courseId } = req.params

  const course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!course) {
    throw new CustomError.NotFoundError(`Course not found`)
  }

  res
    .status(StatusCodes.OK)
    .json({ course, msg: 'Course updated successfully' })
}

const deleteCourse = async (req, res) => {
  const { id: courseId } = req.params
  const course = await Course.findOne({ _id: courseId })
  if (!course) {
    throw new CustomError.NotFoundError(`Course not found`)
  }
  await course.remove()
  res.status(StatusCodes.OK).json({ msg: 'Success! Course removed.' })
}

module.exports = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
}
