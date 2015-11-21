'use-strict'

var React = require('react-native');
var styles = require('hivemind/app/Styles');
var BeesWaxVertical = require('./BeesWaxVertical');

var {
  View,
} = React;

var BeesWaxHeaderVertical = React.createClass ({

  render: function() {
    if (this.props.numWax > 5) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
        </View>
      );
    } else if (this.props.numWax > 4) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
        </View>
      );
    } else if (this.props.numWax > 3) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
        </View>
      );
    } else if (this.props.numWax > 2) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
        </View>
      );
    } else if (this.props.numWax > 1) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
          <BeesWaxVertical/>
        </View>
      );
    } else if (this.props.numWax > 0) {
      return (
        <View style={styles.beesWaxHeaderVertical}>
          <BeesWaxVertical/>
        </View>
      );
    } else {
      return (
        <View style={styles.beesWaxHeaderVertical}/>
      );
    }
  }
});

module.exports = BeesWaxHeaderVertical;