

// Request { course, schedules:[Booking] }
// Schedule { room, days, start, end }

class RequestsStore {
  constructor() {
    this.requests = [
      {course: "TEST 101", schedules: [
        {days: "MWF", start: "10:00", end: "10:45", room: "BUILD 221"},
        {days: "TTh", start: "11:00", end: "14:00", room: "BUILD 221"},
      ]},
      {course: "TEST 551", schedules: [
        {days: "TTh", start: "8:00", end: "10:00", room: "BUILD 313"},
      ]},
    ]
  }

  matchingSearch(text) {
    var query = text.toLowerCase()
    return this.requests.filter(function(request) {
      return request.name.toLowerCase().match(query)
    })
  }

  addRandomData() {
    console.log("ADD RANDOM DATA")
    var randomRequest = {course: "TEST 333", schedules: [
        {days: "TTh", start: "8:00", end: "10:00", room: "BUILD 313"},
      ]}
    this.requests.push(randomRequest)
    // annnnnd.... I need to refresh
  }
}

module.exports = new RequestsStore()