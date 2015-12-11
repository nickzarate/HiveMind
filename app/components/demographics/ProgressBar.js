'use-strict'

var React = require('react-native');
var ProgressNode = require('./ProgressNode');
var styles=require('hivemind/app/Styles');

var {
  View,
  StyleSheet,
} = React;

var ProgressBar = React.createClass ({

  render: function() {
    return (
      <View style={styles.headerView}>
        <ProgressNode index={1} progressIndex={this.props.progressIndex} />
        <ProgressNode index={2} progressIndex={this.props.progressIndex} />
        <ProgressNode index={3} progressIndex={this.props.progressIndex} />
        <ProgressNode index={4} progressIndex={this.props.progressIndex} />
      </View>
    );
  }
});

module.exports = ProgressBar;