const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
  },
  type: {
    type: String,
    required: [true, 'Please provide course type'],
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide short description'],
  },
  note: {
    type: String,
  },
})

module.exports = mongoose.model('Course', CourseSchema)
