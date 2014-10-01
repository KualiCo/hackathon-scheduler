/** @jsx React.DOM */
var React = require('react')
var _ = require('lodash')

// ok I'm baaaaack!

var InputBar = React.createClass({
  render: function() {
    var isPrefix = false

    var prefix = []
    var inputs = []
    var postfix = []

    React.Children.forEach(this.props.children, function(child) {
      var className = child.props.className || ''
      if (className.match("prefix")) {
        prefix.push(child)
      }
      else if (className.match('postfix')) {
        postfix.push(child)
      }
      else {
        inputs.push(child)
      }
    })

    var children = []
    if (prefix.length) {
      children.push(this.renderElements(prefix))
    }
    children.push(this.renderInputs(inputs))
    if (postfix.length) {
      children.push(this.renderElements(postfix))
    }

    return (
      <div className="row">
        <div className="large-12 columns">
          <div className="row collapse">
          {children}
          </div>
        </div>
      </div>
    )
  },

  renderInputs: function(inputs) {
    return (
      <div className="small-10 columns">
        {inputs}
      </div>
    )
  },

  renderElements: function(elements) {
    return (
      <div className="small-2 columns">
        {elements}
      </div>
    )
  },
})

module.exports = InputBar