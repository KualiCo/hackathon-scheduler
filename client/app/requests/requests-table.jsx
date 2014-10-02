/** @jsx React.DOM */
var React = require('react')

var RequestTable = React.createClass({
  render: function() {
    return (
      <div>
        <div className="flexbox">
          <span className="td table-header flex-2">Course</span>
          <span className="td table-header flex-1">Room</span>
          <span className="td table-header flex-1">Time</span>
        </div>
        <div>{this.props.requests.map(this.renderRequestRow)}</div>
      </div>
    )
  },

  renderRequestRow: function(request) {
    return (
      <RequestRow request={request}/>
    )
  },
})







var RequestRow = React.createClass({
  render: function() {
    var request = this.props.request
    return (
      <div className="table-striped-row flexbox">
        <span className="td flex-1">{request.course}</span>
        <div className="td flex-1">
        {request.schedules.map(this.renderSchedule)}
        </div>
      </div>
    )
  },

  renderSchedule: function(schedule) {
    return (
      <div className="flexbox">
        <span className="td flex-1 small-data">{schedule.room}</span>
        <span className="td flex-1 small-data">{schedule.days} {schedule.start}-{schedule.end}</span>
      </div>
    )
  },
})



module.exports = RequestTable
