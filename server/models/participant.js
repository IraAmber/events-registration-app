const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  dateOfBirth: Date,
  source: String,
  eventId: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model('Participant', participantSchema)
