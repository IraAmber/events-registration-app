const express = require('express');
const router = express.Router();
const Participant = require('./models/participant');

// Register for an event
router.post('/', async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).send(participant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get participants for an event
router.get('/:eventId', async (req, res) => {
  try {
    const participants = await Participant.find({ eventId: req.params.eventId });
    res.send(participants);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
