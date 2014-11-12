/** @jsx React.DOM */

var ContentToggle = React.createClass({
  getInitialState: function() {
    return {
      showDetails: false
    };
  },

  handleClick: function(event) {
    this.setState({
      showDetails: !this.state.showDetails
    });
    this.refs.details.getDOMNode().focus();
  },

  render: function() {
    var details;
    var summaryClassName = "ContentToggle__Summary";

    if (this.state.showDetails) {
      details = this.props.children;
      summaryClassName += " ContentToggle__Summary--open";
    }

    return (
      <div className="ContentToggle">
        <div tabIndex="0" onClick={this.handleClick} onKeyPress={this.handleClick} className="ContentToggle__Summary">
          {this.props.summary}
        </div>
        <div ref="details" tabIndex="-1" className="ContentToggle__Details">
          {details}
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Content Toggle
        </h1>
        <ContentToggle summary="Tacos">
          <p>
            Everybody loves tacos!
          </p>
        </ContentToggle>
      </div>
    );
  }
});

React.render(<App/>, document.body);
