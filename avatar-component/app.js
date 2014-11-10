var Avatar = React.createClass({
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement(ProfilePic, {username: this.props.username}),
        React.createElement(ProfileLink, {username: this.props.username})
      )
    );
  }
});

var ProfilePic = React.createClass({
  render: function () {
    return (
      React.createElement('img',
        {src: 'http://graph.facebook.com/' + this.props.username + '/picture'}
      )
    );
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      React.createElement('a',
       {href: 'http://facebook.com/' + this.props.username},
       this.props.username
      )
    );
  }
});

React.render(
  React.createElement(Avatar, {username: 'mmalchak'}),
  document.body
);
