const express = require('express')
const router = express.Router()
const Event = require('./models/Event')

// Get events with sorting and pagination
router.get('/', async (req, res) => {
  const { sort, page = 1, limit = 10 } = req.query
  const sortOptions = {}
  if (sort) sortOptions[sort] = 1

  try {
    const events = await Event.find()
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit))
    res.json(events)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add a new event (for testing)
router.post('/', async (req, res) => {
  const event = new Event(req.body)
  try {
    await event.save()
    res.status(201).json(event)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
