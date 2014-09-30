/**
 * @jsx React.DOM
 */

var React = require('react');

var HelloWorld = React.createClass({

  render: function() {
    return (
      <div>
        Hello World, Woot
      </div>
    );
  }

});

React.renderComponent(<HelloWorld/>, document.body);
