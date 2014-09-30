/**
 * @jsx React.DOM
 */

var React = require('react');

var HelloWorld = React.createClass({

  render: function() {
    return (
      <div>
        Hello World, WORKING!
      </div>
    );
  }

});

React.renderComponent(<HelloWorld/>, document.body);
