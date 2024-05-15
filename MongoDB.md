Setting Up the MongoDB Database
To run this project, you need to have MongoDB installed and running on your local machine. Follow the steps below to set up the MongoDB database:

1. Install MongoDB
   If you haven't already installed MongoDB, follow the official installation guide for your operating system from the MongoDB documentation https://www.mongodb.com/docs/manual/installation/.

2. Start MongoDB
   Once installed, you can start the MongoDB server. By default, MongoDB listens on port 27017.

For Linux/macOS:
sudo service mongod start
For Windows:
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"

3. Create the Database and Collections
   You can use the MongoDB shell or a GUI tool like MongoDB Compass to create the necessary database and collections.

Using the MongoDB shell:

Open the terminal and run the MongoDB shell:

mongo
Create the database:
use eventsDB

Create the collections:
db.createCollection("events")
db.createCollection("participants")

4. Configure the Application to Connect to MongoDB
   The application is configured to connect to MongoDB running on localhost with the default port 27017. Ensure that your MongoDB instance is running at the following URI:

mongodb://localhost:27017
You can adjust the connection string if your MongoDB setup differs.

5. Seed the Database
   If you want to start with some initial data, you can insert documents into the collections.

Using the MongoDB shell:

// Insert sample event
db.events.insert({
title: "Sample Event",
description: "This is a sample event.",
eventDate: new Date("2024-12-31"),
organizer: "Organizer Name"
})

// Insert sample participant
db.participants.insert({
fullName: "John Doe",
email: "john.doe@example.com",
dateOfBirth: new Date("1990-01-01"),
source: "Internet",
eventId: ObjectId("insert_event_id_here")
})
Replace insert_event_id_here with the actual event ID from the events collection.
