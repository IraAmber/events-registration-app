const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// Connect to the database
mongoose.connect('mongodb://localhost:27017/events_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

// Routes
const eventsRouter = require('./events')
const participantsRouter = require('./participants')
app.use('/api/events', eventsRouter)
app.use('/api/participants', participantsRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
