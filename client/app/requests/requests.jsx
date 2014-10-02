/** @jsx React.DOM */
var React = require('react')
var InputBar = require('../lib/input-bar.jsx')
var store = require('./requests-store')
var RequestTable = require('./requests-table')



// http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/
// https://news.ycombinator.com/item?id=6936975

// NOTES:
// http://joshbassett.info/2014/reactive-uis-with-react-and-bacon/
// someone says: setState is a code smell (unless it is a selected tab or something)
// ALWAYS accept props, and just re-render any time things change. It is fast. Trust it

// Integration Components (Controller)
// - model + view
// - calls re-render whenever anything happens
// Sub-components

// TRY: this should be a prop! Just re-render. wow
// TOP-LEVEL COMPONENT
// needs to create bindings to data that propogate down
// and observe the model closely

var RequestListMain = React.createClass({
  getInitialState: function() {
    return {
      search: "",
      requests: [],
    }
  },

  componentDidMount: function() {
    // I need to set up a relationship here...
    // how do I do this?
  },

  render: function() {
    return (
      <div className="main-content-padding">
        <InputBar className="search-bar">
          <input type="text" placeholder="ECON 101" onChange={this.searchText}/>
          <button className="postfix">Schedule Course</button>
        </InputBar>
        <RequestTable requests={this.state.requests}/>
        <div><button onClick={this.addRandom}>Add Random Data</button></div>
      </div>
    )
  },

  searchText: function(event) {
    var searchQuery = event.target.value
    this.setState({
      search: searchQuery,
    })
    // TODO: Fix search
  },

  addRandom: function() {
    // how can I display this automatically? 
    // IE: observe the store?
    store.addRandomData()
  },
})

var RequestListView = React.createClass({
  render: function() {

  },
})


module.exports = RequestListMain



