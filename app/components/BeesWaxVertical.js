'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');

var {
  Image,
} = React;

var BeesWaxVertical = React.createClass ({
  render: function() {
    return (
      <Image source={require('image!BeesWax')} style={styles.iconVertical}/>
    );
  }
});

module.exports = BeesWaxVertical;