/** @jsx React.DOM */
var React = require('react')
var addons = require('react-addons')

module.exports = React.createClass({

  getInitialState: function() {
    return {isMenuShown: false}
  },

  onMenuClick: function() {
    this.setState({isMenuShown: !this.state.isMenuShown})
  },

  onMainClick: function() {
    this.setState({isMenuShown: false})
  },

  render: function() {

    var mainClasses = addons.classSet({
      'off-canvas-wrap': true,
      'move-right': this.state.isMenuShown,
    })

    return (
      <div className={mainClasses} data-offcanvas>
        <div className="inner-wrap">
          <nav className="tab-bar">
            <section className="left-small">
              <a className="left-off-canvas-toggle menu-icon" onClick={this.onMenuClick}><span></span></a>
            </section>

            <section className="middle tab-bar-section">
              <h1 className="title">Scheduling</h1>
            </section>
          </nav>

          <aside className="left-off-canvas-menu">
            <ul className="off-canvas-list">
              <li><label>Foundation</label></li>
              <li><a href="#">The Psychohistorians</a></li>
              <li><a href="#">...</a></li>
            </ul>
          </aside>

          <section className="main-section">
            <this.props.activeRouteHandler />
          </section>

        <a className="exit-off-canvas" onClick={this.onMainClick}></a>

        </div>
      </div>
    )
  },
})

