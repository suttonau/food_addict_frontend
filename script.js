document.addEventListener('DOMContentLoaded', function() {
  signIn();
  getMeetings();

})


function signIn(){
  var div = document.querySelector('#signIn')

  if (div.style.display === "none") {
    div.style.display = "block";
    // var text = document.createElement("TEXTAREA");
    // var node = document.createTextNode("Please enter your name");
    // text.appendChild(node);
    // div.appendChild(text);

  } else {
    div.style.display = "none";
  }
}

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
