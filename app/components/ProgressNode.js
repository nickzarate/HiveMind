'use-strict'

var React = require('react-native');
var styles=require('hivemind/app/Styles');

var {
  View,
  StyleSheet,
} = React;

var ProgressNode = React.createClass ({
  render: function() {
    if (this.props.index <= this.props.progressIndex) {
      return <View style={styles.activated}/>
    } else {
      return <View style={styles.deactivated}/>
    }
  }

});

module.exports = ProgressNode;