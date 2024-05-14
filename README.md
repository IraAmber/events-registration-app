# Events Registration App

## Overview
This web-based application allows users to view, register for, and manage events. The project is built using Node.js for the backend and HTML/CSS/JavaScript for the frontend.

## Features
### Base Level
- **Events Board Page**: Displays a paginated list of events.
- **Event Registration Page**: Users can register for events.
- **Event Participants Page**: Displays a list of registered participants for an event.

### Middle Level Enhancements
- **Sorting**: Sort events by title, event date, and organizer.
- **Form Validation**: Custom validation for registration form fields.
- **Search**: Search participants by full name and email.

### Advanced Level Enhancements
- **Infinite Scroll**: Automatically load more events as the user scrolls.
- **Charts**: Display line/bar charts showing registrations per day.
- **Automated Event Import**: Periodically fetch and store events from a third-party API.

## Instructions to Run the Application

### Prerequisites
- Node.js and npm
- MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd events-registration-app

2. Install dependencies:
npm install


3. Start MongoDB:
mongod


4. Start the server:
npm start

Open browser and navigate to http://localhost:3000