
class RequestsStore {
  constructor() {
    this.requests = [
      {name: "TEST 101", time: "MWF 10am", room: "BUILD 221", priority: 1},
      {name: "TEST 201", time: "MWF 10am", room: "BUILD 221", priority: 1},
      {name: "TEST 301", time: "MWF 10am", room: "BUILD 221", priority: 1},
      {name: "TEST 401", time: "MWF 10am", room: "BUILD 221", priority: 1},
    ]
  }
}

module.exports = new RequestsStore()