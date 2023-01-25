const express = require('express')
const router = express.Router()

const {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deleteCourse,
  updateCourse,
} = require('../controllers/courseController')

router.post('/', createCourse)
router.get('/', getAllCourse)
router.get('/:id', getSingleCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
