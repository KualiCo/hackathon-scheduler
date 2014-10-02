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

  // My State: searchText. NOT the filtered list.
  // http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html
  getInitialState: function() {
    return {
      searchText: "",
      requests: [],
    }
  },

  componentDidMount: function() {
    // observe the store's requests
    // + filter by search text
    // -> searchText
    // -> new requests
    store.onRequests.subscribe(function(value) {
      this.setState({requests: store.requests})
    }.bind(this))
  },

  render: function() {
    // it's built from the searchText + data store
    var filteredRequests = store.matchingSearch(this.state.requests, this.state.searchText)

    return (
      <div className="main-content-padding">
        <RequestListSearchBar 
          onSearch={this.onSearch}
          searchText={this.state.searchText} />
        <RequestTable requests={filteredRequests}/>
        <div><button onClick={this.addRandom}>Add Random Data</button></div>
      </div>
    )
  },

  onSearch: function(searchText) {
    // this will re-trigger render automatically
    this.setState({searchText: searchText})
  },

  addRandom: function() {
    // how can I display this automatically? 
    // IE: observe the store?
    store.addRandomData()
  },
})

var RequestListSearchBar = React.createClass({

  onChange: function(event) {
    this.props.onSearch(event.target.value)
  },

  render: function() {
    return (
      <InputBar className="search-bar">
        <input type="text" placeholder="ECON 101" 
        value={this.props.searchText}
        onChange={this.onChange} />
        <button className="postfix">Schedule Course</button>
      </InputBar>
    )
  },
})

module.exports = RequestListMain



