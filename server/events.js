const express = require('express');
const router = express.Router();
const Event = require('./models/event');

// Create a new event (for initial seeding or manual addition)
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all events with sorting
router.get('/', async (req, res) => {
  const sort = req.query.sort || 'eventDate'; // Default sorting by event date
  try {
    const events = await Event.find({}).sort({ [sort]: 1 });
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
