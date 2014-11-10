var LikeButton = React.createClass({
  getInitialState: function () {
    return { liked: false };
  },
  handleClick: function () {
    this.setState({liked: !this.state.liked})
  },
  render: function () {
    var text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      React.DOM.p(
        { onClick: this.handleClick },
        'You ', text, ' this.  Click to toggle!'
      )
    );
  }
});

React.render(
  React.createElement(LikeButton, null),
  document.body
);
