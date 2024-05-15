const express = require('express')
const router = express.Router()
const Participant = require('./models/Participant')

// Get participants for a specific event
router.get('/:eventId', async (req, res) => {
  const { eventId } = req.params
  const { search } = req.query
  const searchOptions = search
    ? {
        eventId,
        $or: [
          { fullName: new RegExp(search, 'i') },
          { email: new RegExp(search, 'i') },
        ],
      }
    : { eventId }

  try {
    const participants = await Participant.find(searchOptions)
    res.json(participants)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Register a participant
router.post('/', async (req, res) => {
  const participant = new Participant(req.body)
  try {
    await participant.save()
    res.status(201).json(participant)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
