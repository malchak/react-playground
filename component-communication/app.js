/** @jsx React.DOM */

var guid = 0

var AssignmentForm = React.createClass({
  propTypes: {
    onCreate: React.PropTypes.func.isRequired
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var name = this.refs.name.getDOMNode();
    var points = this.refs.points.getDOMNode();

    this.props.onCreate({
      id: ++guid,
      name: name.value,
      points: points.value
    });

    this.getDOMNode().reset();
    name.focus();
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>New Assignment</legend>
        <p>
          <label htmlFor="name">Assignment Name</label><br/>
          <input id="name" ref="name" />
        </p>
        <p>
          <label htmlFor="points">Points Possible</label><br/>
          <input id="points" ref="points" />
        </p>
        <p>
          <button type="submit">Create</button>
        </p>
      </form>
    );
  }
});


var AssignmentList = React.createClass({
  render: function() {
    var assignments = this.props.assignments.map(function(assignment) {
      return <li key={assignment.id}>{assignment.name} - {assignment.points} points</li>;
    });
    return (
      <ul>
        {assignments}
      </ul>
    );
  }
});


var App = React.createClass({
  getInitialState: function() {
    return {
      assignments: []
    };
  },

  addAssignment: function (assignment) {
    var newAssignments = this.state.assignments.concat([assignment]);
    this.setState({assignments: newAssignments});
  },

  render: function() {
    return (
      <div>
        <h1>Assignment Form</h1>
        <AssignmentForm onCreate={this.addAssignment}/>
        <AssignmentList assignments={this.state.assignments} />
      </div>
    );
  }
});

React.render(<App />, document.body);
