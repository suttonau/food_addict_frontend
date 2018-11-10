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
  let div = document.createElement('div')
  div.innerHTML = meetingInstance.render()
  document.querySelector('#meetings').appendChild(div)
}
