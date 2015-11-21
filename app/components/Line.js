'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  Image,
} = React;

var Line = React.createClass ({
  render: function() {
    return (
      <Image source={require('./line.png')} style={styles.line}/>
    );
  }
});

module.exports = Line;