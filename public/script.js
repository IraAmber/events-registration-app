document.getElementById('sort').addEventListener('change', loadEvents)

function loadEvents() {
  const sort = document.getElementById('sort').value
  fetch(`/api/events?sort=${sort}`)
    .then((response) => response.json())
    .then((events) => {
      const eventsList = document.getElementById('events-list')
      eventsList.innerHTML = '' // Clear current events
      events.forEach((event) => {
        const eventItem = document.createElement('div')
        eventItem.innerHTML = `
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <p><strong>Date:</strong> ${new Date(
                      event.eventDate
                    ).toLocaleDateString()}</p>
                    <p><strong>Organizer:</strong> ${event.organizer}</p>
                    <button onclick="location.href='register.html?eventId=${
                      event._id
                    }'">Register</button>
                    <button onclick="location.href='participants.html?eventId=${
                      event._id
                    }'">View Participants</button>
                `
        eventsList.appendChild(eventItem)
      })
    })
    .catch((error) => console.error('Error:', error))
}

loadEvents() // Initial load
