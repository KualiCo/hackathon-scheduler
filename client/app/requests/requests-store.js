
var bacon = require('baconjs')

// Request { course, schedules:[Booking] }
// Schedule { room, days, start, end }

class RequestsStore {

  constructor() {

    this.requests = []
    this.onAdd = new Bacon.Bus()
    this.onDelete = new Bacon.Bus()
    this.onUpdate = this.onAdd.merge(this.onDelete)


    // add some sample data
    this.add({course: "TEST 101", schedules: [
      {days: "MWF", start: "10:00", end: "10:45", room: "BUILD 221"},
      {days: "TTh", start: "11:00", end: "14:00", room: "BUILD 221"},
    ]})

    this.add({course: "TEST 551", schedules: [
      {days: "TTh", start: "8:00", end: "10:00", room: "BUILD 313"},
    ]})

    this.onRequests = this.onUpdate.toProperty(this.requests)
    console.log("Finished Adding")
  }

  matchingSearch(requests, text) {
    var query = text.toLowerCase()
    return requests.filter(function(request) {
      return request.course.toLowerCase().match(query)
    })
  }

  addRandomData() {
    var randomRequest = {course: "TEST 333", schedules: [
        {days: "TTh", start: "8:00", end: "10:00", room: "BUILD 313"},
      ]}
    this.add(randomRequest)
  }

  add(request) {
    console.log("-add")
    this.requests.push(request)
    this.onAdd.push(request)
  }
}

module.exports = new RequestsStore()