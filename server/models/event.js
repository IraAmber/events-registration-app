const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  eventDate: Date,
  organizer: String,
})

module.exports = mongoose.model('Event', eventSchema)
