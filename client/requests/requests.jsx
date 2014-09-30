/** @jsx React.DOM */
var React = require('react')
module.exports = React.createClass({

  getInitialState: function() {
    return {
      search: "",
      requests:[
        {name: "TEST 101", time: "MWF 10am", room: "BUILD 221", priority: 1},
        {name: "TEST 201", time: "MWF 10am", room: "BUILD 221", priority: 1},
        {name: "TEST 101", time: "MWF 10am", room: "BUILD 221", priority: 1},
        {name: "TEST 101", time: "MWF 10am", room: "BUILD 221", priority: 1},
      ]}
  },

  render: function() {
    var requests = this.state.requests
    return (
      <div>
        <h1>Scheduler: Requests</h1>
        <div className="search-bar">
          <InputBar
            placeholder="ECON 101"/>
        </div>
        <div>
          <div className="flexbox">
            <span className="td table-header flex-2">Course</span>
            <span className="td table-header flex-1">Room</span>
            <span className="td table-header flex-1">Time</span>
          </div>
          <div>{requests.map(this.renderRequestRow)}</div>
        </div>
      </div>
    )
  },

  renderRequestRow: function(request) {
    return (
      <RequestRow request={request}/>
    )
  },

  scheduleNewCourse: function() {
    console.log("SCHEDULE NEW COURSE")
  },

  searchText: function(value) {
    this.setState({search:value})
  }
})

var RequestRow = React.createClass({
  render: function() {
    var request = this.props.request
    return (
      <div className="table-striped-row flexbox">
        <span className="td flex-1">{request.name}</span>
        <div className="td flex-1">
          <div className="flexbox">
            <span className="td flex-1 small-data">{request.room}</span>
            <span className="td flex-1 small-data">{request.time}</span>
          </div>
          <div className="flexbox">
            <span className="td flex-1 small-data">{request.room}</span>
            <span className="td flex-1 small-data">{request.time}</span>
          </div>
        </div>
      </div>
    )
  }
})


// this gives you a search bar
// works with the other ones
// <InputBar><input><button></InputBar> // 
var InputBar = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="large-12 columns">
          <div className="row collapse">
            <div className="small-10 columns">
              <input type="text" placeholder="ECON 101"/>
            </div>
            <div className="small-2 columns">
              <button className="button postfix">Schedule New Course</button>
            </div>
          </div>
        </div>
      </div>
  )}
})

// Put in an Input
// and a Postfix...

// // I want some way to have a reusable style for it. 
// // that doesn't KILL me. 
// var SearchBar = React.createClass({
//   render: function() {
//     return (
//       <input type="text" ref="search" 
//         className="search-bar-input"
//         placeholder={this.props.placeholder}
//         onChange={this.onChange} />
//     )
//   },

//   onChange: function(event) {
//     this.props.onSearch(event.target.value)
//   },
// })

