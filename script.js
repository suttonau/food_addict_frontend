document.addEventListener('DOMContentLoaded', function() {
  getMeetings();

})

function getMeetings() {
  fetch(`http://localhost:3000/meetings`)
  .then(response => response.json())
  .then(meetings => {
    meetings.forEach(meeting => {
      createMeeting(meeting)
    })
  })
}

function createMeeting(meeting) {
  let meetingInstance = new Meeting(meeting.id, meeting.name)
  let meetingDiv = document.createElement('div')
  meetingDiv.innerHTML = meetingInstance.render()
  document.querySelector('#meetings').appendChild(meetingDiv)
  meeting.locations.forEach(location => {
    let locationInstance = new Location(location.name, location.description, location.address, location.image)
    debugger
    meetingDiv.querySelector('ul').appendChild(locationInstance.render())
  })
}
