/** @jsx React.DOM */
var React = require('react')
var InputBar = require('../lib/input-bar.jsx')
var store = require('./requests-store')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      search: "woot",
      requests: store.requests,
    }
  },

  render: function() {
    var requests = this.state.requests
    return (
      <div>
        <h1>Scheduler: Requests</h1>
        <InputBar className="search-bar">
          <input type="text" placeholder="ECON 101" onChange={this.searchText}/>
          <button className="postfix">Schedule Course</button>
        </InputBar>
        <div>Current Search: <span>{this.state.search}</span></div>
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

  },

  searchText: function(event) {
    var searchQuery = event.target.value
    this.setState({
      search: searchQuery,
      requests: store.matchingSearch(searchQuery),
    })
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


